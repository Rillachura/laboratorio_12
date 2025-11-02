function filtrarArreglo(arr, callback) {
    const resultado = [];

    for (let i=0; i<arr.length; i++) {
        if (callback(arr[i])) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

const numeros = [1, 2, 3, 4, 5, 6];
const esPar = n => n%2==0;

console.log(filtrarArreglo(numeros, esPar));