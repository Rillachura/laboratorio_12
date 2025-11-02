function crearContador(inicial) {
    let cuenta = inicial;

    function incrementar (){
        cuenta++;
        return cuenta;
    }

    function resetear (){
        cuenta=inicial;
        return cuenta;
    }
    return {resetear, incrementar};
}
const contador = crearContador(2);
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.resetear());
