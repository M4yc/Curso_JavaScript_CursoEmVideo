var agora = new Date()
var hora = agora.getHours()
var bodyjs = document.querySelector('body')
var divtxt = document.getElementById('divtitle')
var imgjs = document.getElementById('img')

hora = 14

divtxt.innerText = `Agora são ${hora} horas.`

if (hora < 12){
    bodyjs.style.backgroundImage = 'url(./assets/dia.jpg)'
    imgjs.src = './assets/dia.jpg'
}else if(hora < 18){
    bodyjs.style.backgroundImage = 'url(./assets/tarde.jpg)'
    imgjs.src = './assets/tarde.jpg'
}else if(hora >= 18){
    bodyjs.style.backgroundImage = 'url(./assets/noite.jpg)'
    imgjs.src = './assets/noite.jpg'
}