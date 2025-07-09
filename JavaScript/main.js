let welcomes = document.querySelectorAll(".welcome");

window.onload = function () {
    welcomes.forEach((ele) => {
    // transform: translateY(100px);
        ele.style.opacity = "1";
        ele.style.transform = "translateY(1px)";
    });
};
