const express = require('express');
const fs = require('fs');
let app = express()
const HOST = 5000
app.get('/workers'(req, res) =>{
    res.send('Hello')
})
app.listen(HOST, (err)=>{
    if (err) {
        console.log(err);
    }
    console.log('localhost: ' + HOST);
})