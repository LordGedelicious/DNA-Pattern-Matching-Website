var validasi = require('./algorithm/validateInput');
var validasiSearch = require('./algorithm/validateSearch');
var bm = require('./algorithm/bm');
var kmp = require('./algorithm/kmp');
var similarity = require('./algorithm/similarity');
var boyerMoore = require('./algorithm/bm');
var knuth = require('./algorithm/kmp');
var similar = require('./algorithm/similarity');
const express = require("express");
const next = require('next')
const fs = require('fs')
const path = require('path')
const dialog = require('dialog-node')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
var fileupload = require('express-fileupload');
var formidable = require('formidable');
const axios = require('axios');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

async function access_database(newListing, searchKeyword, functionPurpose) {
    const uri = "mongodb+srv://mengstima:mengstima@cluster1.gdw1d.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected correctly to server");
        if (functionPurpose == "addToDiseaseList") {
            let isValueAlreadyExist = await access_database(newListing, searchKeyword, "searchDisease");
            if (isValueAlreadyExist) {
                console.log("Disease already exist");
                return false;
            } else {
                var result = await client.db("disease_db").collection("disease_list").insertOne(newListing);
                console.log(`New disease has been added with the following id: ${result.insertedId}`);
                return `New disease has been added with the following id: ${result.insertedId}`;
            }
        } else if (functionPurpose == "addToTestResults") {
            const result = await client.db("disease_db").collection("test_results").insertOne(newListing);
            console.log(`New listing created in test_results collections with the following id: ${result.insertedId}`);
            return `New listing created in test_results with the following id: ${result.insertedId}`;
        } else if (functionPurpose == "searchDisease") {
            const result = await client.db("disease_db").collection("disease_list").findOne({ "disease_name": searchKeyword });
            return result['disease_code'];
        } else if (functionPurpose == "searchByDate") {
            const result = await client.db("disease_db").collection("test_results").findOne({ "test_date": searchKeyword });
            return result;
        }
    } catch (e) {
        console.log(e.message);
    }
}

async function access_database_search(searchKeyword, functionPurpose) {
    mongoose.connect("mongodb+srv://mengstima:mengstima@cluster1.gdw1d.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected correctly to server");
        if (functionPurpose == "searchByDate") {
            var query = { "test_date": searchKeyword };
            var result = db.collection("test_results").find(query).toArray();
            return result;
        }
    });
}

async function findAllDocuments(searchKeyword, functionPurpose) {
    const result = await access_database_search(searchKeyword, functionPurpose).then(function(result) {
        if (result) {
            console.log(`Search results: ${result}`);
            return result;
        } else {
            dialog.info("Disease not found");
        };
    });
}


async function stringMatching(tempPatientData, searchKeyword, targetSequence) {
    const result = await access_database(tempPatientData, searchKeyword, "searchDisease").then(function(result) {
        if (result) {
            console.log(`Search results: ${result}`);
            console.log("UDAH MASUKKK");
            var diseaseCode = result;
            var testByBM = bm.bm(targetSequence, diseaseCode);
            var testByKMP = kmp.kmp(targetSequence, diseaseCode);
            var testBySimilarity = similarity.similarity(targetSequence, diseaseCode);
            if (testByBM == true && testByKMP == true) {
                tempPatientData['similarity'] = "100%";
                tempPatientData['is_sick'] = true;
                console.log("Patient is sick");
            } else {
                tempPatientData['similarity'] = parseFloat(testBySimilarity).toFixed(2) + "%";
                if (testBySimilarity > 80) {
                    tempPatientData['is_sick'] = true;
                } else {
                    tempPatientData['is_sick'] = false;
                }
                console.log("GWSSSS");
            }
            access_database(tempPatientData, searchKeyword, "addToTestResults");
        } else {
            dialog.info("Disease not found");
        };
    });
};
// async function listdatabases(client) {
//     databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// }

// function validateInput(input) {
//     const regex = /(A|T|C|G)*/g;
//     var a = Array.from(input.match(regex)).toString().replace(/,\s*$/, "");
//     console.log(a);
//     console.log(input);
//     if (a.length != input.length) {
//         return false;
//     } else {
//         return true;
//     }
// }

const server = express();
app.prepare()
    .then(() => {
        server.use(fileupload());
        server.use(express.urlencoded({ extended: true }));

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })

        server.post('/AddDNA', (req, res) => {
            let diseaseName = req.body.diseaseName;
            let diseaseCode = req.files.diseaseCode.data.toString('utf8');
            console.log(`The disease is: ${diseaseName} and the code is: ${diseaseCode}`);
            let isInputValid = validasi.validateInput(diseaseCode);
            if (!isInputValid) {
                dialog.info("Invalid input", "Input Rejected!");
                return res.redirect('back');
            };
            let newListing = { disease_name: diseaseName, disease_code: diseaseCode };
            let newListingAddded = access_database(newListing, diseaseCode, "addToDiseaseList");
            //TODO : dia udah ga ngepush, tapi tetep aja harus dibenerin popup I/Onya
            if (!newListingAddded) {
                dialog.info("Failed to add new listing", "Failed!");
            } else {
                dialog.info("New listing added", "Success!");
            }
            return res.redirect('back');
        })

        server.post('/CheckDNA', (req, res) => {
            let patientName = req.body.patientName;
            let patientCode = req.files.patientDNACode.data.toString('utf8');
            let targetDisease = req.body.diseaseTarget;
            console.log(`The patient is: ${patientName} and the code is: ${patientCode}. Current target disease is: ${targetDisease}`);
            let isInputValid = validasi.validateInput(patientCode);
            if (!isInputValid) {
                dialog.info("Invalid input", "Input Rejected!");
                return res.redirect('back');
            };
            var date_ob = new Date();
            let date = ("0" + date_ob.getDate()).slice(-2);
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            let year = date_ob.getFullYear();
            let currentDate = date + "-" + month + "-" + year;
            let patientData = { test_date: currentDate, patient_name: patientName, tested_disease: targetDisease };
            stringMatching(patientData, targetDisease, patientCode);
            res.redirect('back');
        })

        server.post('/SearchDNA', (req, res) => {
            let searchQuery = req.body.searchQuery;
            console.log(`The search query is: ${searchQuery}`);
            let isInputValid = validasiSearch.validateSearch(searchQuery);
            if (!isInputValid) {
                dialog.info("Invalid input", "Input Rejected!");
                return res.redirect('back');
            }
            let cleanSearchQuery = searchQuery.split(/(\s+)/).filter(function(e) {
                return e.trim().length > 0;
            });
            console.log(cleanSearchQuery);
            if (cleanSearchQuery.length == 1) {
                let targetQuery = cleanSearchQuery[0].replace(/\/\.+/g, '-');
                console.log(targetQuery);
                let searchResult = findAllDocuments(targetQuery, "searchByDate");
                console.log(searchResult);
                if (!searchResult || searchResult.length == 0) {
                    dialog.info("Disease not found", "Failed!");
                } else {
                    dialog.info("Disease found", "Success!");
                    res.send(searchResult);
                }
            }
        });
    });