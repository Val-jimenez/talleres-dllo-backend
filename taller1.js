// Punto 1
function convertidorTemp(num) {
    return (num * 9 / 5) + 32;
}
console.log(convertidorTemp(5));

// Punto 2
function resolvedor(a, b, c, signo) {
    if (signo == "+")
        return (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
    else
        return (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
}
console.log(resolvedor(1, 5, 4, "+"));

// Punto 3
function mejorParidad(num) {
    if (num % 2 == 0)
        return true;
    else
        return false;
}
console.log(mejorParidad(9));

// Punto 4

function peorParidad(num) {
    while (num >= 2) {
       num=num-2;
    }
    if (num === 0)
        return true;
    else
        return false;
}
console.log(peorParidad(21));