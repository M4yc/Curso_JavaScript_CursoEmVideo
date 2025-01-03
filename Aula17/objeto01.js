let amigo = {nome: 'José', 
    sexo:'M', 
    peso: 85.4, 
    idade: 38,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}
amigo.engordar(2)
console.log(amigo)
