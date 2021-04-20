export function scrollToIdClick(e) {
    e.preventDefault()
    removerActive()

    const element = e.target
    const id = element.getAttribute('href')
    const section = document.querySelector(id)

    fecharMenu()
    element.classList.add("active")
    window.scroll(0,(section.offsetTop-100))
    
}

function removerActive() {
    const menuItens = document.querySelectorAll('.navbar a[href^="#"]')
    menuItens.forEach(item => {
        item.classList.remove("active")
    })
}

export function fecharMenu() {
    let toggleMenu = document.getElementById("navbar-toggler")
    let navbarSupportedContent = document.getElementById("navbarSupportedContent")

    toggleMenu.setAttribute('aria-expanded','false')
    toggleMenu.classList.add("collapsed")
    navbarSupportedContent .classList.remove("show")
}