// Lấy phần tử wrapper của slider
const sliderWrapper = document.getElementById('sliderWrapper');
// Lấy tất cả các slide bên trong wrapper
const slides = sliderWrapper.children;
// Tổng số slide
const totalSlides = slides.length;
// Chỉ số slide hiện tại
const slideWidth = 802;
let currentIndex = 0;

// Hàm chuyển đến slide theo chỉ số
function slideToIndex(index) {
    sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Hàm chuyển đến slide tiếp theo
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slideToIndex(currentIndex);
}

// Tự động chuyển slide sau mỗi 3 giây
setInterval(nextSlide, 3000);



