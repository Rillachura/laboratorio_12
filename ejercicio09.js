const calcularDescuento = function(precio, porcentaje){
    if (porcentaje>=0 && porcentaje<=100 && precio>0){
        return precio*(porcentaje/100);
    }
    return 0;
}
console.log("Descuento: " + calcularDescuento(120, 10));
console.log("Descuento: " + calcularDescuento(-120, 10));
console.log("Descuento: " + calcularDescuento(120, -15));