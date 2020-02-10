const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// This code is for connecting database

console.log("connecting....");

mongoose.connect("mongodb://localhost:27017/jail", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err, data) => {
    if (err) {
        console.log("error : " + err);
    } else {
        console.log("database is connected!");
    }
});

// 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '110mb' }));
app.use(bodyParser.json());

// this code is for creating schema or model for an object

const prisoner = mongoose.Schema({     //creating a schema
    fullname: String,
    height: Number,
    sex: String,
    age: Number,
    arrestTime: String,
    status: String,
    prisonerAddress: String,
    case: String,
    police: String,
    dateCaptured: String
});
const P = mongoose.model("Prisoner", prisoner);    //creating a model out of the schema

const visitor = mongoose.Schema({
    fullname: String,
    prisonername: String,
    age: Number,
    address: String,
    relationship: String,
    dateVisit: String,
    timeIn: String,
    timeOut: String
})

const V = mongoose.model("Visitor", visitor);

app.post('/add_visitor', (req, res) => {

    var data = req.body;
    console.log(data.dateVisit)

    var store_visitor = new V({
        fullname: data.fullname,
        prisonername: data.prisonername,
        address: data.address,
        age: data.age,
        relationship: data.relationship,
        dateVisit: data.dateVisit,
        timeIn: data.timeIn,
        timeOut: data.timeOut
    });

    store_visitor
        .save()
        .then((result) => {
            res.send({ status: 200, data: result, message: 'success' })
            console.log("data", data)
        })
        .catch(err => {
            res.send({ data: err, message: 'failed' })
        })
});

app.get('/retrieve_visitor', (req, res) => {
    console.log('visitors')
    V.find({}, (err, vis) => {
        res.send({ status: 200, data: vis, message: 'success' })
    }).catch(err => {
        res.send({ status: 503, data: err, message: 'failed' })
    });
})

// 

// this is the routes for adding data of prisoners 

app.post('/add_prisoner', (req, res) => {

    var data = req.body;

    var store_prisoner = new P({
        fullname: data.fullname,
        height: data.height,
        sex: data.sex,
        age: data.age,
        arrestTime: data.arrestTime,
        status: data.status,
        prisonerAddress: data.prisonerAddress,
        case: data.case,
        police: data.police,
        dateCaptured: data.dateCaptured
    });
    store_prisoner
        .save()
        .then((result) => {
            res.send({ status: 200, data: result, message: 'success' })
        })
        .catch(err => {
            res.send({ data: err, message: 'failed' })
        })
});

// 


//  this code is for retrieving/adding information of prisoner 

app.get('/retrieve_prisoner', (req, res) => {
    console.log('testing')
    P.find({}, (err, pris) => {
        res.send({ status: 200, data: pris, message: 'success' })
    }).catch(err => {
        res.send({ status: 503, data: err, message: 'failed' })
    });
})

//




// this code is for running the server with the given port

app.listen(PORT, (req, res) => {
    console.log(`Server is running on Port:${PORT}`);
});

//