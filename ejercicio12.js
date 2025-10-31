const convertirMayus = texto => texto.toUpperCase();

const agregarSigno = texto => `${texto}!`;

const componerTransformaciones = (f1, f2) => {
    return texto => f2(f1(texto));
}

const transformar = componerTransformaciones(convertirMayus, agregarSigno);

console.log(transformar("hola"));
console.log(transformar("como estas"));
console.log(transformar("aDiOs"));