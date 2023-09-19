const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../images');
const targetFile = path.join(__dirname, '../public/image-filenames.json');
console.log(`Updating contents of ${targetFile}`);

fs.readdir(imagesDir, (err, files) => {
    const encodedFiles = files
        .filter(filename => !filename.startsWith('.') && filename !== 'DS_Store')
        .map(filename => encodeURIComponent(filename));
    const jsonData = JSON.stringify(encodedFiles);
    fs.writeFileSync(targetFile, jsonData);
    console.log(`Updated to ${encodedFiles.length} entries`);
});
