const express = require('express')
const app = express()
const data = require("./data");

app.get('/', function (req, res) {
    res.send("Hello");
})

app.get('/groups', function(req, res) {
    return res.json(data.groups);
})

app.get('/recentCalls', function(req, res) {
    return res.json(data.recentCalls);
})

app.get('/recents', function(req, res) {
    return res.json(data.recents);
})

app.get('/friends', function(req, res) {
    return res.json(data.friends);
})

app.get('/notifications', function(req, res) {
    return res.json(data.notifications);
})

app.listen(3003, function(){
    console.log("http://localhost:3003/");
})