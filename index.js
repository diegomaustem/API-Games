const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

let DB = {
    games: [
        {
            id: 25,
            title: 'Final Fantasys',
            year: 2019,
            price: 60
        },
        {
            id: 22,
            title: 'Call Of Duty',
            year: 2012,
            price: 120
        },
        {
            id: 11,
            title: 'Crash and Players',
            year: 2002,
            price: 90
        },
        {
            id: 30,
            title: 'GTA 5',
            year: 2018,
            price: 250
        },
        {
            id: 25,
            title: 'Red Dead Redemptiom',
            year: 2011,
            price: 50
        }
    ]
}

app.get("/", () => {

})

app.listen(45678, () => {
    console.log('API RUNING')
})