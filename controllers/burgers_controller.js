const express = require('express');
let burger = require('../models/burgers');

let router = express.Router();

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let hbObject = {
            burgers: data
        };
        console.log(hbObject);
        res.render('index', hbObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({ id: result.insertID });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    burger.updateOne(`id = ${req.params.id}`, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;