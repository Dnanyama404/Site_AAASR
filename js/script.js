// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.flexDirection = "column";
});

// =====================
// SLIDER DE NOTÍCIAS
// =====================
const newsSlider = document.getElementById("news-slider");
const newsSlides = document.querySelectorAll("#news-slider .slide");

let newsIndex = 0;

function showNews() {
    if (newsIndex >= newsSlides.length) newsIndex = 0;
    if (newsIndex < 0) newsIndex = newsSlides.length - 1;

    newsSlider.style.transform = `translateX(-${newsIndex * 100}%)`;
}

document.getElementById("next-news").onclick = () => {
    newsIndex++;
    showNews();
};

document.getElementById("prev-news").onclick = () => {
    newsIndex--;
    showNews();
};

setInterval(() => {
    newsIndex++;
    showNews();
}, 5000);


// =====================
// SLIDER DE IMAGENS
// =====================
const imgSlider = document.getElementById("img-slider");
const imgSlides = document.querySelectorAll("#img-slider .slide");

let imgIndex = 0;

function showImg() {
    if (imgIndex >= imgSlides.length) imgIndex = 0;
    if (imgIndex < 0) imgIndex = imgSlides.length - 1;

    imgSlider.style.transform = `translateX(-${imgIndex * 100}%)`;
}

document.getElementById("next-img").onclick = () => {
    imgIndex++;
    showImg();
};

document.getElementById("prev-img").onclick = () => {
    imgIndex--;
    showImg();
};

setInterval(() => {
    imgIndex++;
    showImg();
}, 4000);

