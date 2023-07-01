const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/images', express.static('/Users/dietrichaumann/Downloads/Wienerschmarrn'));

app.get('/image-filenames', (req, res) => {
  const directoryPath = '/Users/dietrichaumann/Downloads/Wienerschmarrn';

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
