const searchIcon = document.querySelector(".search-icon i");
const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput= document.querySelector(".search-input input");
const closeIcons= document.querySelector(".search-input i")
searchIcon.addEventListener("click", ()=>{
    searchIcon.parentElement.classList.add("change");
    searchInputWrapper.classList.add("change");

    setTimeout(()=>{
        searchInput.focus()
    }, 1000)
})

closeIcons.addEventListener("click", ()=>{
    searchIcon.parentElement.classList.remove("change");
    searchInputWrapper.classList.remove("change");
})
