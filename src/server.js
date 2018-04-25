const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../build')));

// health check route
app.get('/ping', (req, res) => {
  res.send('pong');
});

//


app.get('/edit', function(req, res, next) {
  // check if the user is logged in.
  /**
   * TODO
   * VERIFY IF USER IS LOGGED IN CORRECTLY.
   * ASSUMING TRUE RIGHT NOW
   */

   next();

}, function (req, res) {
  console.log('Serving static server prod path');
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


// serve the app on default route
app.get('/', function (req, res) {
  console.log('Serving static server prod path');
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});


const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log('Express server listening on port ', PORT);
})

