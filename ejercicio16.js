function acumulador(valorInicial) {
    let valor = valorInicial;

    function sumar (num){
        valor+=num;
        return valor;
    }
    return sumar;
}
const sumador = acumulador(2);
console.log(sumador(2));
console.log(sumador(-1));
console.log(sumador(10));