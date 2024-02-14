const step1 = document.getElementById('step-1')
const step2 = document.getElementById('step-2')
const button = document.getElementById('button-confirm')

button.addEventListener('click', (e) => {
    step1.classList.add('hidden')
    step2.classList.remove('hidden')
})