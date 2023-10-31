const firstBtn = document.getElementById('first')
const secondBtn = document.getElementById('second')
const thirdBtn = document.getElementById('third')
const fourthBtn = document.getElementById('fourth')
const fifthBtn = document.getElementById('fifth')

const firstAnswer = document.getElementById("first-answer")
const secondAnswer = document.getElementById("second-answer")
const thirdAnswer = document.getElementById("third-answer")
const fourthAnswer = document.getElementById("fourth-answer")
const fifthAnswer = document.getElementById("fifth-answer")

firstBtn.addEventListener('click', () => {
    if (firstAnswer.style.height === '0px') {
        firstAnswer.style.height = '60px'
    } else {
        firstAnswer.style.height = '0px'
    }
})

secondBtn.addEventListener('click', () => {
    if (secondAnswer.style.height === '0px') {
        secondAnswer.style.height = '60px'
    } else {
        secondAnswer.style.height = '0px'
    }
})

thirdBtn.addEventListener('click', () => {
    if (thirdAnswer.style.height === '0px') {
        thirdAnswer.style.height = '60px'
    } else {
        thirdAnswer.style.height = '0px'
    }
})

fourthBtn.addEventListener('click', () => {
    if (fourthAnswer.style.height === '0px') {
        fourthAnswer.style.height = '60px'
    } else {
        fourthAnswer.style.height = '0px'
    }
})

fifthBtn.addEventListener('click', () => {
    if (fifthAnswer.style.height === '0px') {
        fifthAnswer.style.height = '60px'
    } else {
        fifthAnswer.style.height = '0px'
    }
})