const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

function getPeople(){
    const contents = fs.readFileSync(path.join(__dirname, "./db/people.json"));
    const obj = JSON.parse(contents);
    return obj;
}

function addPerson(person){
    const unixTimeCreated = new Date().getTime();
    // const newData = Object.assign({"created": unixTimeCreated}, request.body);

    const people = getPeople();
    const timePerson = Object.assign({"created": unixTimeCreated}, person);
    people.people.push(timePerson);
    fs.writeFileSync(path.join(__dirname, "./db/people.json"), JSON.stringify(people));
    return people;
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/signup", (req, res) => {
    const people = getPeople();
    res.json(people);
});

app.post("/signup", (req, res) => {

    const person = req.body;
    const people = addPerson(person);
    res.json(people);
})

app.listen(3000, () => {
    console.log("Server listinening at http://localhost:3000!")
});