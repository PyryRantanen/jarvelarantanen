const still_button = document.getElementById("still-button");
const work_button = document.getElementById("work-button");
const video_container = document.getElementById("video-container");
const image_container = document.getElementById("image-container");
const work_container = document.getElementById("work-container");
const contact_container = document.getElementById("contact-container");
const contact_button = document.getElementById("contact-button");

const img = document.querySelector(".image");
const logo = document.getElementById("logo");

const images = [
  "Image 1.JPG",
  "Image 2.JPG",
  "Image 3.JPG",
  "Image 4.JPG",
  "Image 5.JPG",
  "Image 6.JPG",
  "Image 7.JPG",
  "Image 8.JPG",
  "Image 9.JPG",
  "Image 10.JPG",
];

const ButtonSelected = {
  NONE: 0,
  WORK: 1,
  STILL: 2,
  CONTACT: 3,
};
let selectedButton = ButtonSelected.NONE;

function buttonStatus(buttonSelected) {
  if (selectedButton !== buttonSelected) {
    selectedButton = buttonSelected;
  } else {
    selectedButton = ButtonSelected.NONE;
  }
}

logo.addEventListener("click", () => {
  buttonStatus(ButtonSelected.NONE);
  image_container.style.display = "none";
  work_container.style.display = "none";
  video_container.style.display = "block";
  contact_container.style.display = "none";
});

still_button.addEventListener("click", () => {
  buttonStatus(ButtonSelected.STILL);
  if (selectedButton == ButtonSelected.STILL) {
    img.src = `images/${images[currentImageIndex]}`;
    image_container.style.display = "flex";
    video_container.style.display = "none";
    work_container.style.display = "none";
    contact_container.style.display = "none";
  }
  if (selectedButton == ButtonSelected.NONE) {
    image_container.style.display = "none";
    video_container.style.display = "block";
    work_container.style.display = "none";
    contact_container.style.display = "none";
  }
});

// Advance images
let currentImageIndex = 0;
image_container.addEventListener("click", () => {
  currentImageIndex++;
  img.src = `images/${images[currentImageIndex]}`;
  console.log(currentImageIndex, images[currentImageIndex]);
  if (currentImageIndex >= images.length - 1) {
    currentImageIndex = 0;
  }
});

work_button.addEventListener("click", () => {
  buttonStatus(ButtonSelected.WORK);
  if (selectedButton == ButtonSelected.WORK) {
    work_container.style.display = "flex";
    image_container.style = "none";
    video_container.style.display = "none";
    contact_container.style.display = "none";
  }
  if (selectedButton == ButtonSelected.NONE) {
    work_container.style.display = "none";
    video_container.style.display = "block";
    image_container.style.display = "none";
    contact_container.style.display = "none";
  }
});

const works = [
  "Blau Habitare 24",
  "Coverstory",
  "Woodnotes K-chair",
  "Asun - Vuokko Nurmesniemi",
  "Woodnotes - Notes from the wood",
  "Asun - Skanno Home",
];

const worksVideo = [
  "Blau - Habitare 24.mp4",
  "Coverstory.mp4",
  "Woodnotes - K-tuoli.mp4",
  "Asun - Vuokko Nurmesniemi.mp4",
  "Woodnotes - Notes from the wood.mp4",
  "Asun - Skanno Home.mp4",
];

const unorderedList = document.querySelector("ul");

const workVideo = document.getElementById("work-video");

works.forEach((element, index) => {
  let listItem = document.createElement("li");
  listItem.textContent = element;
  listItem.style.cursor = "pointer";
  listItem.style.listStyle = "none";
  listItem.addEventListener("mouseenter", () => {
    workVideo.src = `videos/${worksVideo[index]}`;
  });
  listItem.addEventListener("click", () => {
    workVideo.src = `videos/${worksVideo[index]}`;
  });
  unorderedList.appendChild(listItem);
});

contact_button.addEventListener("click", () => {
  buttonStatus(ButtonSelected.CONTACT);
  if (selectedButton == ButtonSelected.CONTACT) {
    contact_container.style.display = "grid";
    work_container.style.display = "none";
    image_container.style = "none";
    video_container.style.display = "none";
  }
  if (selectedButton == ButtonSelected.NONE) {
    work_container.style.display = "none";
    video_container.style.display = "block";
    image_container.style.display = "none";
    contact_container.style.display = "none";
  }
});
