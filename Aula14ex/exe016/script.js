function Contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerText = "Impossível contar!"
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = "Contando: "
        if (p <= 0){
            window.alert("Passo Inválido! Considerando PASSO 1")
            p = 1
        }

        if(i < f){
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
                
            }
        }else{
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
                
            }
            
        }
        res.innerHTML += `🏁`
        
    }
}
