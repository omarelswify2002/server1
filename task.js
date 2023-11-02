const express = require('express');
const mongoose = require('mongoose');


let app = express();

async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/students');
    if (!connection) {
     console.log('noo')
    } else {
     console.log('good')
    }
 }
 connect()

//schema1 for student data
const students1schema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    age : Number,
    id : Number,
    address : String,
    phone : String,
    personalemail : String,
    universityemail : String

});

let studentmodel = new mongoose.model("studentsdata" , students1schema);
let newstudent = new studentmodel({
    first_name : "Omar",
    last_name : "Elswify",
    age : 20,
    id : 123456789,
    address : "cairo_Imbaba" ,
    phone : "01001101201",
    personalemail : "omar@o123.com",
    universityemail : "Fci@f123.com"
}).save();

//schema2 (courses)
const coursesschema = new mongoose.Schema({
    name : String,
    department : String,
    points : Number
});

let coursesmodel = new mongoose.model("courses" , coursesschema);
let newcourses = new coursesmodel({
    name: "Introduction to Cloud Computing",
    department : "Department of Computer Science",
    points: 4
}).save();

app.listen(3000 , function(){
    console.log('server now is opend')
})