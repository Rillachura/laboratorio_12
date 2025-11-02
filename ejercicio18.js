function media(...numeros) {
    if(numeros.length==0) return 0;

    let suma=0;
    for(let i=0; i<numeros.length; i++){
        suma+=numeros[i];
    }
    return suma/numeros.length;
}
console.log(media(15, 12, 10));
console.log(media(15, 12));
console.log(media());