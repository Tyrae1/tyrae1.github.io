window.addEventListener("load", function() {
    document.body.classList.remove("preload");
    document.querySelector(".preloader").classList.add("hidden");

    // Опціонально: Видалити елемент повністю після зникнення
    setTimeout(() => {
        document.querySelector(".preloader").remove();
    }, 500);
});