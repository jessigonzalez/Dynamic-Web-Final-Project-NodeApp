var express = require('express');
var app = express();
const port = process.env.PORT || 4000;

/*app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/


const indexRoute = require('./routes/index.js')
const postRoute = require('./routes/post.js')
const submitRoute = require('./routes/submit.js')


var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

app.use( function(req, res, next) {
  if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
    return res.sendStatus(204);
  }
  return next();

});

app.use(express.static(path.join(__dirname,"public")));
app.use("/post",postRoute);
app.use("/submit",submitRoute);

app.use("/submit-form",(req,res) =>
  res.sendFile("public/form.html",{ root: __dirname})
);

console.log("The App is listening")
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
