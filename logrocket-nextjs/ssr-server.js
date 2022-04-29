const express = require('express')
const next = require('next')
const fs = require('fs')
const path = require('path')
const dialog = require('dialog-node')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
var fileupload = require('express-fileupload');
var formidable = require('formidable');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

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

        server.post('/addnewdna', (req, res) => {
            let diseaseName = req.body.diseaseName;
            let diseaseCode = req.files.diseaseCode;
            res.send(`The disease is: ${diseaseName} and the code is: ${diseaseCode.name}`);
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })