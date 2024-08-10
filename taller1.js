// Punto 1
function convertidorTemp(num) {
    return (32 * 9 / 5) + 32;
}
console.log(convertidorTemp(32));

// Punto 2
function resolvedor(a, b, c, signo) {
    if (signo == "+")
        return (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
    else
        return (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
}
console.log(resolvedor(1, 5, 4, "-"));

// Punto 3
function mejorParidad(num) {
    if (num % 2 == 0)
        return true;
    else
        return false;
}
console.log(mejorParidad(8));

// Punto 4

/*function peorParidad(num) {
    aux = num;
    for (let i = num; i <=0; i--) {
        aux = aux / 2
        aux=aux;    }
    if (aux === 1)
        return "El número es par";
    else
        return "El número es impar";
}
console.log(peorParidad(8)); */