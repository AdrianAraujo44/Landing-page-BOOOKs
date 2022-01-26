// scroll page
function scrollToIdClick(e) {
  e.preventDefault()
  removerActive()

  const element = e.target
  const id = element.getAttribute('href')
  const section = document.querySelector(id)

  fecharMenu()
  element.classList.add("active")
  window.scroll(0, (section.offsetTop - 100))

}

function readMoreButton() {
  removerActive()
  const section = document.querySelector("#about")
  fecharMenu()
  window.scroll(0, (section.offsetTop - 100))
}

function fecharMenu() {
  let toggleMenu = document.getElementById("navbar-toggler")
  let navbarSupportedContent = document.getElementById("navbarSupportedContent")

  toggleMenu.setAttribute('aria-expanded', 'false')
  toggleMenu.classList.add("collapsed")
  navbarSupportedContent.classList.remove("show")
}

function removerActive() {
  const menuItens = document.querySelectorAll('.navbar a[href^="#"]')
  menuItens.forEach(item => {
    item.classList.remove("active")
  })
}

const menuItens = document.querySelectorAll('.navbar a[href^="#"]')
menuItens.forEach(item => {
  item.addEventListener('click', scrollToIdClick);
})
// Menu scroll
var nav = document.querySelector('nav')
let navbar = document.querySelector('ul')
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 70) {
    nav.classList.add('bg-dark', 'shadow', 'p-md-3')
    navbar.classList.remove('me-auto')
    navbar.classList.add('mx-auto');

  } else {
    nav.classList.remove('bg-dark', 'shadow', 'p-md-3')
    navbar.classList.remove('mx-auto')
  }
})