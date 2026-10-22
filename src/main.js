import './styles.css'

const navToggle = document.querySelector('[data-menu-toggle]')
const nav = document.querySelector('[data-mobile-nav]')

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true'
  navToggle.setAttribute('aria-expanded', String(!isOpen))
  nav?.classList.toggle('hidden', isOpen)
  nav?.classList.toggle('flex', !isOpen)
})

document.querySelectorAll('[data-mobile-nav] a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false')
    nav?.classList.add('hidden')
    nav?.classList.remove('flex')
  })
})
