const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

const chosenImages = images[Math.floor(Math.random() * images.length)];

console.log(chosenImages);
const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImages}`;
console.log(bgImage);

document.body.appendChild(bgImage)