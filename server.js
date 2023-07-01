const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'images 4')));

app.get('/image-filenames', (req, res) => {
  const directoryPath = path.join(__dirname, 'images 4');

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log('Unable to scan directory: ' + err);
      return res.sendStatus(500);
    }

    const encodedFiles = files.map(filename => encodeURIComponent(filename));
    res.json(encodedFiles);
  });
});

app.listen(port, () => {
  console.log(`Rrrush app listening at http://localhost:${port}`)
});
