const esPositivo = numero => {
    if (numero>0)
        return `${numero} es positivo`;
    else
        return `${numero} no es positivo`;
}
console.log(esPositivo(5));
console.log(esPositivo(-5));