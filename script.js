const container = document.getElementsByClassName('conatiner')
const text = document.getElementById('text')

const totalTime = 8000
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()


function breatheAnimation() {
    text.innerHTML = 'Breathe In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold!'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'conatiner shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)