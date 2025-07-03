'use strict';
document.getElementById("filter").addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    const cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        if (selectedValue === "all") {
            card.style.display = "block";
        } else {
            if (card.dataset.category === selectedValue) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    }
});

