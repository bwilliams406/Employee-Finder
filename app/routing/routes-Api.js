const express = require("express");
const path = require('path');
const router = express.Router();
const employeeList = require('../data/employee')



  // Return all employees found in employees.js as JSON
  router.get("/api/employee", function(req, res) {
    res.json(employeeList);
  });

  router.post("/api/employee", function(req, res) {
    console.log(req.body.scores);

    // Receive user details (name, photo, scores)
    let user = req.body;

    // parseInt for scores
    for(let i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default employee match is the first employee but result will be whoever has the minimum difference in scores
    let bestEmployeeIndex = 0;
    let minimumDifference = 40;

    // in this for-loop, start off with a zero difference and compare the user and the ith employee scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(let i = 0; i < employeeList.length; i++) {
        let totalDifference = 0;
      for(let j = 0; j < employeeList[i].scores.length; j++) {
        let difference = Math.abs(user.scores[j] -+ employeeList[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best employee index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestEmployeeIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to employee array
    employeeList.push(user);

    // send back to browser the best employee match
    res.json(employeeList[bestEmployeeIndex]);
  });




module.exports = router;


