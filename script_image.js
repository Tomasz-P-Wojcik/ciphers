const mainImage = document.getElementById("main");
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});