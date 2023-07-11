const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//JS에서 이미지를 만들고 이걸 HTML에 추가하는 법

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`; // 데이터 타입 = string

document.body.appendChild(bgImage);
