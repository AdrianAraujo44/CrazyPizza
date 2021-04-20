var nav = document.querySelector('nav')
let navbar = document.querySelector('ul')
let navBarBrand = document.getElementById("brand")
    window.addEventListener('scroll',function() {
        if(window.pageYOffset > 100) {
            nav.classList.add('bg-dark','shadow','p-md-3')
            navbar.classList.remove('me-auto')
            navbar.classList.add('mx-auto');
            navBarBrand.style.visibility = "visible"

        }else {
            nav.classList.remove('bg-dark','shadow','p-md-3')
            navbar.classList.remove('mx-auto')
            navBarBrand.style.visibility = "hidden"
        }
    })