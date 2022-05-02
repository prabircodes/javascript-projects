const pannels = document.querySelectorAll('.pannel')

pannels.forEach((pannel) => {
    pannel.addEventListener('click', () => {
        removeActiveClasses()
        pannel.classList.add('active')
    })
})

function removeActiveClasses() {
    pannels.forEach(pannel => {
        pannel.classList.remove('active')
    })
}