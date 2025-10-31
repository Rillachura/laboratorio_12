function mayorDeTres(a, b, c) {
    if (a>b && a>c) {
        return `El mayor de ${a}, ${b} y ${c} es ${a}`;}
    else if (b>a && b>c) {
        return `El mayor de ${a}, ${b} y ${c} es ${b}`;}
    else if (c>b && c>a) {
        return `El mayor de ${a}, ${b} y ${c} es ${c}`;}
}
console.log(mayorDeTres(1, 2, 3));
console.log(mayorDeTres(-5, 2, 8));
console.log(mayorDeTres(-2, 2, 0));