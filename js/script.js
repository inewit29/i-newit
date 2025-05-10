let currentSlide = 0;
const items = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) item.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % items.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + items.length) % items.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // tự động chuyển mỗi 4 giây
