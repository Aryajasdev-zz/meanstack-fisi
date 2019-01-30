'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {    
    var docs = {
        pageTitle: 'Index' 
    }
    res.status(200).json(docs);    
});

module.exports = router;