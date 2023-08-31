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

app.get("/games", (req, res) => {
    res.statusCode = 200
    res.json(DB.games)
})

app.get("/game/:id", (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
    }else{
        let id = parseInt(req.params.id)
        let game = DB.games.find(game => game.id == id)

        if(game != undefined) {
            res.statusCode = 200
            res.send(game)
        }else{
            res.sendStatus(404)
        }
    }
})

app.post("/game", (req, res) => {

    let {title, price, year} = req.body

    DB.games.push({
        id: 25,
        title,
        price,
        year
    })

    res.sendStatus(200)
})

app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
    }else{
        let id = parseInt(req.params.id)
        let index = DB.games.find(game => game.id == id)

        if(index == -1) {
            res.sendStatus(404)
        }else{
            DB.games.splice(index, id)
            res.sendStatus(200)
        }
    }
})

app.listen(45678, () => {
    console.log('API RUNING')
})