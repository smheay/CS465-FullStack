var express = require("express");
var router = express.Router();
var async = require("express-async-await");
var fetch = require("node-fetch");

const url = "https://restcountries.eu/rest/v2/all";


/* GET home page. */
router.get("/", async function (req, res, next) {
  /* let countries = getDataAsync(); */

  try {
    let response = await fetch(url);
    let data = await response.json();

    /* var name = [
      {
        country: "",
        capital: "",
      },
    ]; */

    var name = [];

    data.forEach((item) => {
      console.log(item.name, item.capital);
      name.push(item.name + "  "+ item.capital+ '\n');
    });


    console.log(name);
  } catch (error) {
    console.log("Request failed", error);
  }

  res.render("catalog", {
    title: "Catalog of Countries",
    writeHere1: `${name} `,
  });

  /* `${name.slice(',')  } ` */

  /* ${name.country}  ${name.capital}  */
});

module.exports = router;
