document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const listCard = document.querySelector(".listCard");
    const cards = listCard.children;

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        for (const card of cards) {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
});
