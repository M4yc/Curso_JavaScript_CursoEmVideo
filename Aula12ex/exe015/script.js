function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || Number(fAno.value.length > ano)){
        window.alert(`[ERRO] Verifique os dados novamente`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade  = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', './assets/CriancaM.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './assets/JovemM.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', './assets/AdultoM.png')
            }else{
                //Idoso
                img.setAttribute('src', './assets/IdosoM.png')
            }
        }else{
            genero = "Mulher"
            if(idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', './assets/CriancaF.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './assets/JovemF.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', './assets/AdultoF.png')
            }else{
                //Idoso
                img.setAttribute('src', './assets/IdosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        

    }

    
}