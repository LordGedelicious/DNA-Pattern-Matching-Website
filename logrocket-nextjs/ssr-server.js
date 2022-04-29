var validasi = require('./algorithm/validateInput');
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
const { MongoClient } = require('mongodb');

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
            let isValueAlreadyExist = access_database(newListing, searchKeyword = newListing['disease_name'], "searchDisease");
            if (isValueAlreadyExist) {
                console.log("Disease already exist");
                return false;
            } else {
                var collection = client.db("test").collection("disease");
                var result = await collection.insertOne(obj);
                console.log(`New disease has been added with the following id: ${result.insertedId}`);
                return `New disease has been added with the following id: ${result.insertedId}`;
            }
        } else if (functionPurpose == "addToTestResults") {
            const result = await client.db("disease_db").collection("test_results").insertOne(newListing);
            console.log(`New listing created in test_results collections with the following id: ${result.insertedId}`);
            return `New listing created in test_results with the following id: ${result.insertedId}`;
        } else if (functionPurpose == "searchDisease") {
            const result = await client.db("disease_db").collection("disease_list").findOne({ "disease_name": searchKeyword });
            if (result) {
                console.log(`Search results: ${result['disease_code']}`);
                return result['disease_code'];
            } else {
                console.log("No results found");
                return null;
            }
        }
    } catch (e) {
        console.log(e.message);
    }
}

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

app.prepare()
    .then(() => {
        const server = express()

        server.use(fileupload());
        server.use(express.urlencoded({ extended: true }));

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })

        server.get('/p/:id', (req, res) => {
            const actualPage = '/post'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
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
            let newListingAddded = access_database(newListing, "", "addToDiseaseList");
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
            let isDiseaseExist = access_database(patientCode, targetDisease, "searchDisease");
            console.log(isDiseaseExist);
            if (isDiseaseExist) {
                let isSame = false;
                let isSameResultByBM = bm.bm(patientCode, isDiseaseExist);
                // let isSameResultByKMP = kmp.kmp(patientCode, isDiseaseExist);
                // if (isSameResultByBM && isSameResultByKMP) { FIX NANTI
                if (isSameResultByBM) {
                    let callDate = new Date();
                    let date = ("0" + date_ob.getDate()).slice(-2);
                    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                    let year = date_ob.getFullYear();
                    let currentDate = year + "-" + month + "-" + date;
                    let patientData = { test_date: currentDate, patient_name: patientName, tested_disease: targetDisease, similarity: '100%', is_sick: true };
                    let addListingToTestResults = access_database(patientData, targetDisease, "addToTestResults");
                    if (!addListingToTestResults) {
                        dialog.info("Failed to add new listing", "Failed!");
                    } else {
                        dialog.info("New listing added", "Success!");
                    }
                } else {
                    dialog.info("No match found", "No match found!");
                }
            }
        })
    });