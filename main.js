const pizzas = [
    { ID: 1, nombre: "muzzarella", ingredientes: "salsa y muzzarella", precio: 500 }, 
    { ID: 2, nombre: "fugazetta", ingredientes: "cebolla y muzzarella", precio: 550 }, 
    { ID: 3, nombre: "jamon y queso", ingredientes: "salsa, muzzarella y jamon", precio: 1000 }, 
    { ID: 4, nombre: "canchera", ingredientes: "salsa y verdeo", precio: 400 }, 
    { ID: 5, nombre: "la cochina", ingredientes: "salsa, cheddar, panceta y papas fritas", precio: 1500 }, 
    { ID: 6, nombre: "jamon y morrones", ingredientes: "salsa, muzzarella, jamon y morrones", precio: 1000 }
];

/*
// Punto A
const idImpar = pizzas.filter(x => x.ID % 2 === 1);

console.log ('Los ID impares son:', idImpar);

//Punto B

const menorA600 = pizzas.filter((menor600) => {
    return menor600.precio < 600
})

console.log('Las pizzas que valen menos de $600 son:', menorA600)

//Punto C

pizzas.forEach(({nombre, precio}) => {    
    console.log('Pizza:',nombre,'. Tiene un costo de:', precio)
})

//Punto D

pizzas.forEach(({nombre, ingredientes}) => {    
    console.log('Pizza:',nombre)
    console.log('ingredientes que trae:',ingredientes)
}) */

const infoPizzas = document.getElementById("IDPizza");

/*if (infoPizzas > 6) {
    alert ("Ese ID no fue encontrado");
} else (infoPizzas <= 0) ;{
    alert ("Tiene que colocar un dato o ingresar un ID que no sea negativo");
}*/

var message;

if (infoPizzas > 6) {
  message = "El ID no es valido";
} else if (infoPizzas <= 0) {
  message = "El ID no puede ser negativo o igual a 0";
} else if (infoPizzas = empty) {
  message = "Debe ingresar un ID";
}

alert(message);
    
