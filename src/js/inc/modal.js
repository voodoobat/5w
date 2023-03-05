document.querySelectorAll('[data-js-modal]').forEach((e) => {
  const { jsModal } = e.dataset
  const modal = document.querySelector(jsModal)

  e.addEventListener('click', () => {
    modal.classList.toggle('is-active')
  })
})
