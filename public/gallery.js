const imageElement = document.getElementById('gallery-image');

let images = [];

function updateImage() {
  if (images.length === 0) {
    return; // Don't try to show an image if we don't have any
  }

  const currentImage = images.shift(); // Take the first image from the list
  images.push(currentImage); // And add it back to the end of the list

  imageElement.src = '/images 4/' + currentImage;
}

fetch('/image-filenames')
  .then(response => response.json())
  .then(filenames => {
    images = filenames;
    setInterval(updateImage, 750); // Update the image every 750ms
  });
