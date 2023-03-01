const btnContact = document.querySelector('#btnContactMe')
const contactModal = document.querySelector('.contactModal')
const btnCloseModal = document.querySelector('#btn-close-modal')

btnContact.addEventListener('click', () => {
    contactModal.classList.add('active-modal')
})

btnCloseModal.addEventListener('click', () => {
    contactModal.classList.remove('active-modal')
})