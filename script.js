const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle
        ('active')
    })
})


//Bring in togge=le buttons (querySelectorAll)
//loop through nodeList (forEach)
//Add click event (addEventListener)
//toggle the active class on the parent node (.parentNode & classList.toggle())