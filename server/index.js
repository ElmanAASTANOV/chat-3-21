const express = require('express');
const WebSocket = require("ws");
const http = require("http");
const url = require("url-parse");
const app = express();
var cors = require('cors');
const data = require("./data");
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())
app.get('/', function (req, res) {
    res.send("Hello");
})

app.get('/groups', function (req, res) {
    return res.json(data.groups);
})

app.get('/recentCalls', function (req, res) {
    return res.json(data.recentCalls);
})

app.get('/recents', function (req, res) {
    return res.json(data.recents);
})

app.get('/friends', function (req, res) {
    return res.json(data.friends);
})

app.get('/notifications', function (req, res) {
    return res.json(data.notifications);
})

app.get('/messages', function(req, res) {
    return res.json(data.messages);
})

app.post("/login", function(req, res){

    var result = data.users.find(function(data){
        return data.username === req.body?.username && data.password === req.body?.password;
    })
    if (!result) {
        return res.status(404).send();
    }
    let resultCopy= {...result}
    delete resultCopy.password;
    return res.status(200).json(resultCopy);
});


const server = http.createServer(app);

const wss = new WebSocket.Server({
    server,
});

let sessions = {};

wss.on("connection", function connection(ws, req) {
    const query = url(req.url, true).query;
    let id = query.id;
    sessions[id] = ws;
    ws.on("close", function () {
        delete sessions[id];
    });

    ws.on("message", function message(data) {
        parsedData = JSON.parse(data);
        sessions[parsedData.id]?.send(JSON.stringify({
            from: id,
            message: parsedData.message
        }))
    });
})

server.listen(3003, function () {
    console.log("http://localhost:3003/");
})
