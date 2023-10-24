let numberContainer = document.querySelectorAll('.numberContainer span')
let numberCounter = document.querySelector('.numberCounter')
let startCount = false
let starter = (window.innerHeight / 5) * 4
window.addEventListener('scroll', () => {
    if (numberCounter.getBoundingClientRect().top <= starter) {
        if (!startCount) {
            numberContainer.forEach(el => {
                setCounter(el)
            })
        }
    }
})
function setCounter(el) {
    let number = Number(el.dataset.count)
    let startNum = 0
    let intervalSet = setInterval(() => {
        if (startNum == number) {
            clearInterval(intervalSet)
            startCount = true
        }
        startNum++
        el.textContent = startNum
    }, 15);
}
