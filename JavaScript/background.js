const images = ["b_img1.jpg", "b_img2.jpg"];

const currImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `Image/${currImg}`;

document.body.appendChild(bgImage);
