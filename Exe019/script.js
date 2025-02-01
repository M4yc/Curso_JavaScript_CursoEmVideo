let tornon = document.getElementById('turnon')
let tornoff = document.getElementById('turnoff')
let lamp = document.getElementById('lamp')

let statuslam = 0 //1 quebrada 0 Funcionando

function quebrar(){
    statuslam = 1
    lamp.src = './assets/quebrada.jpg'
}

function acender(){
    if (statuslam == 1){

    }else{
        lamp.src = './assets/ligada.jpg'
    }
    
}

function apagar(){
    if (statuslam == 1){

    }else{
        lamp.src = './assets/desligada.jpg'
    }
    
}