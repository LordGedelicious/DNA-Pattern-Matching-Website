var validasi = require('./algorithm/validateInput');
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

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

async function main() {
    const uri = "mongodb+srv://mengstima:mengstima@cluster1.gdw1d.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await listdatabases(client);
        console.log("Connected correctly to server");
    } catch (e) {
        console.log(e.message);
    } finally {
        await client.close();
    }
}

async function listdatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

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
            main().catch(console.error);
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
                dialog.info("Invalid input");
            } else {
                dialog.info("Valid input");
            };
            res.redirect('back');
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })