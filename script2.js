const hamburger = document.querySelector('.navbar-toggler')
const navbar = document.getElementById('navbarHeader')

hamburger.addEventListener('click', function() {
  navbar.classList.toggle('collapse')
})