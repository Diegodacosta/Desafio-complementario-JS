alert("Bienvenido al programa que te ayudará a calcular el promedio de edad de tus amigos");

let edad, acumulador = 0;
for (let i = 0; i < 10; i++) {
    edad = parseInt(prompt("Ingresa la edad de tu amigo " + (i + 1)));
    acumulador = acumulador + edad;
}

alert("El promedio de edad de tu grupo de amigos es: " + (acumulador / 10));

alert("Gracias por usar el programa");