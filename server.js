const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/image-filenames', (req, res) => {
  const directoryPath = path.join(__dirname, 'images 4');

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log('Unable to scan directory: ' + err);
      return res.sendStatus(500);
    }

    const encodedFiles = files
      .filter(filename => !filename.startsWith('.') && filename !== 'DS_Store')
      .map(filename => encodeURIComponent(filename));
    res.json(encodedFiles);
  });
});

app.get('/favicon.ico', (req, res) => {
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Rrrush app listening at http://localhost:${port}`)
});
