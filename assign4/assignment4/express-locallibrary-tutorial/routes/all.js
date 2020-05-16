/* 
router.get('/', function(req, res, next) {
  res.render('all', { title: 'Alll',  }); 
 
});
 */
var express = require("express");
var router = express.Router();
var async = require("express-async-await");
var fetch = require("node-fetch");

const url = "https://restcountries.eu/rest/v2/all";

router.get("/", async function (req, res, next) {
  const ooIprocessData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data);

    str = JSON.stringify(data);
    
  };
  ooIprocessData();

  res.render('all', { 
    title: "All",
    writeHere1: `${str} `,
  });

  res.end;
});
module.exports = router;
