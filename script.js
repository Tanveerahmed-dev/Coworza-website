const slider = document.getElementById("logoSlide");
let position = -slider.scrollWidth;  // Start position (off-screen left)

function slideLogos() {
    position += 1; // change speed by increasing or decreasing this number

    // When the logos leave the screen on the right → reset to left again
    if (position >= window.innerWidth) {
        position = -slider.scrollWidth;
    }

    slider.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(slideLogos);
}

slideLogos();
