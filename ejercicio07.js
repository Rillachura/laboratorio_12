const promedioTresNotas = function (nota1, nota2, nota3){
    if (nota1>=0 && nota2>=0 && nota3>=0 &&
        nota1<=20 && nota2<=20 && nota3<=20){
        return (nota1+nota2+nota3)/3;
    }
    return 0;
}
console.log("Promedio: " + promedioTresNotas(12, 11, 18));
console.log("Promedio: " + promedioTresNotas(-10, 11, 18));
console.log("Promedio: " + promedioTresNotas(12, 11, 28));