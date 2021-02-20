const body = document.querySelector("body");

function paintImage() {
  const image = new Image();
  image.src = 'img/eagle.jpg';
  image.classList.add("bgImage");
  body.prepend(image);
}

paintImage();
