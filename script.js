const starElements = document.querySelectorAll('.fa-star')
const emojiElements = document.querySelectorAll('.fa-regular')

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
    emojiElements.forEach((emojiElements) => {
        emojiElements.style.transform = `translateX(-${index * 50}px)`;
    });
}