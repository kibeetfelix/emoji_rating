const starElements = document.querySelectorAll('.fa-star')

starElements.forEach((starElements, index) => {
    starElements.addEventListener("click", () => {
        updateRating(index)
    });
});

function updateRating(index) {
    starElements.forEach((starElements, idx) => {
        if (idx < index + 1) {
            starElements.classList.add("active");
        } else {
            starElements.classList.remove("active");
        }
    })
}