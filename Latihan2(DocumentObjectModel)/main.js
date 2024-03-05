console.log(document.title)
document.title = 'change tittle'
// console.log(document.body)

const body = document.body
const h1 = document.createElement('h1')
const paragraf = document.createElement('p')
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')
let newText;




// h1.innerHTML = "<marquee> Latihan Javascript </marquee>"

body.append(h1)
body.append(paragraf)

btn1.style.border = '2px'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'

function gantiWarna() {
    btn1.style.backgroundColor = 'blue'
}

function gantiHover() {
    btn1.textContent = 'Wah masuk'
    btn1.style.backgroundColor = 'blue'
    newText = document.createElement('p')
    newText.textContent = "halo"
    body.append(newText)

}

function mouseOut() {
    btn1.innerHTML = '<b>klik sayaa</b>'
    btn1.style.backgroundColor = 'white'
    newText.style.color = 'blue'
}

