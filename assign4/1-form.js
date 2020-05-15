const express = require("express");
const parser = require("body-parser");
const path = require("path");
const app = express();
const port = 5000;



app.use(
  express.urlencoded({
    extended: false,
    limit: 1024,
  })
);

app.get("/", (req, res) => {
  res.send(
    `<h1>Hello welcome to the homepage  <br> <a href="/form" class="btn">Form</a> </h1> `
  );
});

app.get('/form', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname + "/index.html"));
  });


  
//get form data and log it to page and console
app.post("/submit", (req, res) => {
  res.send(
    `<h1> Name: ${req.body.username} <br>` +
      `Email: ${req.body.emailAdress} <br>` +
      `Message: ${req.body.textareaform1} <br>` +
      `<a href="/" class="btn">home</a></h1>`
  );

  console.log(req.body);
  console.log(`Name: ${req.body.username}`);
  console.log(`Email: ${req.body.emailAdress}`);
  console.log(`Message: ${req.body.textareaform1}`);
  res.end();
});


//ERROR ABout Page (In Class )
app.get("/about", (req, res) => {
  const error = new Error(
    `This is not the ${req.originalUrl} you are looking for.`
  );
  res.status(404);
  res.setHeader("X-Not-Found", "barfoobar");
  res.setHeader("X-Powered-By", "yoMomma");
  res.send(`<h1>I really don't know what to do with my hands</h1>`);
});


//ERROR Handle 1
app.use((req, res, next) => {
  const error = new Error(
    `<h1>This is not the ${req.originalUrl} you are looking for.<h1>` +
      `<h1>Please Return to <a href="http://localhost:5000/"> home </a> <h1>`
  );

  res.status(404);
  next(error);
}); 

//ERROR Handle 2
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.send(error.message);
});





//Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





