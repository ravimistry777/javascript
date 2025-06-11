const images = [
  "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?_gl=1*s5foga*_ga*MjA3OTUwMjAzMi4xNzQyODI5NzM2*_ga_8JE65Q40S6*czE3NDk2NTg2MjAkbzMkZzEkdDE3NDk2NTg3MzkkajI2JGwwJGgw",
  "https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?_gl=1*axnxbz*_ga*MjA3OTUwMjAzMi4xNzQyODI5NzM2*_ga_8JE65Q40S6*czE3NDk2NTg2MjAkbzMkZzEkdDE3NDk2NTg2NzEkajkkbDAkaDA.",
  "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?_gl=1*13uc0jd*_ga*MjA3OTUwMjAzMi4xNzQyODI5NzM2*_ga_8JE65Q40S6*czE3NDk2NTg2MjAkbzMkZzEkdDE3NDk2NTg3MDckajU4JGwwJGgw",
  "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?_gl=1*h9l1ux*_ga*MjA3OTUwMjAzMi4xNzQyODI5NzM2*_ga_8JE65Q40S6*czE3NDk2NTg2MjAkbzMkZzEkdDE3NDk2NTg2MzIkajQ4JGwwJGgw"
];

let Index = 0;
const imgElement = document.getElementById("sliderImage");

function DisplayImg(index) {
  imgElement.src = images[index];
}

function nextImage() {
  Index = (Index + 1) % images.length;
  DisplayImg(Index);
}

function prevImage() {
  Index = (Index - 1 + images.length) % images.length;
  DisplayImg(Index);
}