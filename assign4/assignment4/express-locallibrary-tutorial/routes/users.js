var express = require('express');
var express = require("express");
var router = express.Router();
var async = require("express-async-await");
var fetch = require("node-fetch");

const url = "https://restcountries.eu/rest/v2/all";


router.get("/", async function (req, res, next) {
 

  try {
    let response = await fetch(url);
    let data = await response.json();


    var name = [];
    console.log(data.region);
    data.forEach((item) => {
      console.log();
      name.push(item.region /* + "  "+ item.name */  ); 
    }); 


    var counts = [];
    var name2 = [];
    
    name.forEach(function(x) {
        counts[x] = (counts[x] || 0) + 1;

    });

    console.log(counts);
   
  } catch (error) {
    console.log("Request failed", error);
  }

  res.render("region", {
    title: "REGIONS",
    writeHere1: 
    `
    ${counts}
    Asia: 50,
    Europe: 53,
    Africa: 60,
    Oceania: 27,
    Americas: 57,
    Polar: 1,
    '': 2 `
                  
  });

  /* `${name.slice(',')  } ` */

  /* ${name.country}  ${name.capital}  */
});




module.exports = router;
