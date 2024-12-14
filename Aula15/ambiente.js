//Estacionamento

var car = [0,1,0]

car[0] = 1

for(var c = 0; c < car.length;c++){
    if(car[c] == 0){
        console.log(`Vaga ${c} está vazia`)
    
    }else{
        console.log(`Vaga ${c} está ocupda`)
    }
}
/*
for(var c in car){
    if(car[c] == 0){
        console.log(`Vaga ${c} está vazia`)
    
    }else{
        console.log(`Vaga ${c} está ocupda`)
    }
}
*/
console.log(`O valor esta na posição ${car.indexOf(1)}`)
console.log(car)