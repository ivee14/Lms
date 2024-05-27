let ulElement = document.querySelector(".ul-element");
let searchDiv = document.querySelector(".search-div");
let searchInput = document.querySelector(".search-input");

searchDiv.addEventListener('click', (e) => {
    e.preventDefault()

    if(ulElement.style.display == 'none' || ulElement.style.display == ''){
        ulElement.style.display = 'block'
      
    }else{
        ulElement.style.display = 'none'
    }

    
})
ulElement.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == "LI") {
        searchInput.value = e.target.innerText;
        ulElement.style.display = 'none'; 
    }
});

