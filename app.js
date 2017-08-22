const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 12345, "0.0.0.0");
// app.listen(12345,"0.0.0.0");

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
