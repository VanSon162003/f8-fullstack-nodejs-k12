const slidesData = [
    {
        image: "https://picsum.photos/id/25/800/400",
        title: "Slide 1",
    },
    {
        image: "https://picsum.photos/id/27/800/400",
        title: "Slide 2",
    },
    {
        image: "https://picsum.photos/id/28/800/400",
        title: "Slide 3",
    },
    {
        image: "https://picsum.photos/id/29/800/400",
        title: "Slide 4",
    },
];

const slide = document.querySelector("#slide_container");
const dots = document.querySelector("#dots");

const prev = document.createElement("button");
prev.className = "prev";
prev.textContent = "<";

const next = document.createElement("button");
next.className = "next";
next.textContent = ">";

function render() {
    if (!Array.isArray(slidesData)) return;
    const listImg = document.createElement("div");
    listImg.className = "list_img";

    const imgs = slidesData
        .map((item, i) => {
            const dot = document.createElement("div");
            dot.className = "dot";
            dot.dataset.index = i;
            dots.appendChild(dot);
            return `
            <img src="${item.image}">
        `;
        })
        .join("");
    listImg.innerHTML = imgs;

    slide.append(listImg, prev, next);

    return listImg;
}

const listImg = render();
let currentIndex = 0;

dots.querySelectorAll(".dot")[0].classList.add("active");

function handleSlide() {
    const imgsSlide = slide.querySelectorAll("img");
    let width = imgsSlide[0].offsetWidth;

    if (currentIndex === imgsSlide.length - 1) {
        currentIndex = 0;

        listImg.style.transform = `translateX(0px)`;
    } else {
        currentIndex++;

        listImg.style.transform = `translateX(${width * -1 * currentIndex}px)`;
    }

    dots.querySelector(".active").classList.remove("active");
    dots.querySelector(`div[data-index="${currentIndex}"]`).classList.add(
        "active"
    );
}

let handle = setInterval(handleSlide, 3000);

next.addEventListener("click", () => {
    clearInterval(handle);
    handleSlide();
    handle = setInterval(handleSlide, 3000);
});

prev.addEventListener("click", () => {
    clearInterval(handle);

    const imgsSlide = slide.querySelectorAll("img");
    let width = imgsSlide[0].offsetWidth;

    if (currentIndex === 0) {
        currentIndex = imgsSlide.length - 1;
    } else {
        currentIndex--;
    }
    listImg.style.transform = `translateX(${width * -1 * currentIndex}px)`;

    dots.querySelector(".active").classList.remove("active");
    dots.querySelector(`div[data-index="${currentIndex}"]`).classList.add(
        "active"
    );
    handle = setInterval(handleSlide, 3000);
});
