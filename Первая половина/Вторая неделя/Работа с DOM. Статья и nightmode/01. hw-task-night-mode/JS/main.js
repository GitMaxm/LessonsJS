let nightModeButton = document.querySelector("#night-mode");
let bodeElem = document.querySelector("body");

nightModeButton.addEventListener("click", function () {

    if (bodeElem.classList.contains("night")) {
        bodeElem.classList.remove("night");
        nightModeButton.textContent = "Включить ночной режим";
    } else {
        bodeElem.classList.add("night");
        nightModeButton.textContent = "Выключить ночной режим";
    }
});
