const lancho = document.querySelector('.header-hamburguer')

const toggleMenu = e => {
  if (e.type ==='touchstart') {
    e.preventDefault()
  }
  const nav = document.querySelector('.header-nav')
  nav.classList.toggle('active')
}

lancho.addEventListener('click', toggleMenu)
lancho.addEventListener('touchstart', toggleMenu)