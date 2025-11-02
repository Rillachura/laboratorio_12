function operacionesMatematicas() {
    const sumar = (a, b) => a+b;
    const restar = (a, b) => a-b;
    const multiplicar = (a, b) => a*b;
    const dividir = (a, b) => b!=0? a/b : "Error: división entre 0";
    return { sumar, restar, multiplicar, dividir };
}

const op = operacionesMatematicas();
console.log(op.sumar(5, 3));
console.log(op.restar(10, 4));
console.log(op.multiplicar(6, 7));
console.log(op.dividir(9, 3));
console.log(op.dividir(5, 0));