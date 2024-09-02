function removeBotaoAtivo() {
    var e = document.querySelectorAll("[data-tab-button]");
    for (let t = 0; t < e.length; t++)
        e[t].classList.remove("chapter__container__button--is-active")
}
function escondeTodasAbas() {
    var e = document.querySelectorAll("[data-tab-id]");
    for (let t = 0; t < e.length; t++)
        e[t].classList.remove("chapter__container__item--is-active")
}
document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelectorAll("[data-tab-button]");
    for (let t = 0; t < e.length; t++)
        e[t].addEventListener("click", function(t) {
            var e = t.target.dataset.tabButton
            , e = document.querySelector(`[data-tab-id=${e}]`);
            escondeTodasAbas(),
            e.classList.add("chapter__container__item--is-active"),
            removeBotaoAtivo(),
            t.target.classList.add("chapter__container__button--is-active")
        })
});