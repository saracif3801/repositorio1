const express = require('express');
const router = express.Router();

const poll = require('../database');

app.get("/add", (req, res)=>{
    res.render('links/add');
});

module.exports = router;