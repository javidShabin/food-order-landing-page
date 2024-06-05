let searchForm = document.querySelector(".search-form")
let searchIcon = document.getElementById("searchIcon")

searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("active")
})