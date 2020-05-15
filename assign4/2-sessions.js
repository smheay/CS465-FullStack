const express = require("express");
const session = require("express-session");
const app = express();
const port = 5000;

app.use(
  session({
    store: new session.MemoryStore(),
    secret: "my spoon is too big",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000,
    },
  })
);

/* app.get('/', [cb0, cb1, cb2]);  */

app.get('/*', (req, res) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.status(200);
  res.set({ 'Content-Type': 'text/html' }); 
  if (req.session.example === undefined) {
    req.session.example = [];
    req.session.example.push(`${'<br>'} ${req.url}`);
    res.send( 
      `<h1>Currently on route: ${req.url} <br>` +
      `Welcom to ${fullUrl} </h1>`); 
  } else {
    req.session.example.push(`${'<br>'}${req.url}`);  
    res.send( 
    `<h1>Currently on route: ${req.url} <br> ` +
    `Previously Visited: <br> ` +
    `${req.session.example} newest ` );
    
    
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
