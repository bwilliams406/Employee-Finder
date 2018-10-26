const express = require("express");
const path = require('path');
const router = express.Router();
const employeeList = require('../data/employee')

router.post("/api/employee", function(req, res){
     console.log(req.body);
    employeeList.push(req.body);
    //sorting algorithm
    res.json(employeeList);
    
});

//get function for api/employees
router.get("/api/employee", function(req, res){
    res.json(employeeList);

});

module.exports = router;


