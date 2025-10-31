function esMultiplo(a, b) {
    if(a%b == 0){
        return `${a} es multiplo de ${b}`;
    }
    return `${a} no es multiplo de ${b}`;
};
console.log(esMultiplo(12, 3));
console.log(esMultiplo(15, 2));
console.log(esMultiplo(28, 3));