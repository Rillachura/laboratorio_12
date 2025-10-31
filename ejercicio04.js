function areaRectangulo(base, altura) {
    if (altura>0 && base>0){
        return base*altura;
    }
    return 0;
};
console.log(areaRectangulo(5, 6) + " metros cuadrados");
console.log(areaRectangulo(10, 15) + " metros cuadrados");