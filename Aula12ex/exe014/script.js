function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var bodyjs = document.querySelector('body')
    var msgtxt = document.getElementById('msg')
    var img = document.getElementById('imagem')

    msgtxt.innerText = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12){
        bodyjs.style.backgroundImage = 'url(./assets/dia.jpg)'
        img.src = './assets/dia.jpg'
    }else if(hora >= 12 && hora < 18){
        bodyjs.style.backgroundImage = 'url(./assets/tarde.jpg)'
        img.src = './assets/tarde.jpg'
    }else if(hora >= 18 && hora < 24){
        bodyjs.style.backgroundImage = 'url(./assets/noite.jpg)'
        img.src = './assets/noite.jpg'
    }else{
        bodyjs.style.backgroundImage = 'url(./assets/madrugada.jpg)'
        img.src = './assets/madrugada.jpg'
    }
}
