function procesarTexto(texto) {
    function limpiarEspacios() {
        let nuevoTexto = "";
        let anteriorEspacio = false;

        for (let i=0; i<texto.length; i++) {
            let c = texto[i];
            if (c==" ") {
                if (!anteriorEspacio && nuevoTexto.length>0) {
                    nuevoTexto+=c;
                }
                anteriorEspacio=true;
            } else {
                nuevoTexto+=c;
                anteriorEspacio=false;
            }
        }
        if (nuevoTexto[nuevoTexto.length-1]==" ") {
            nuevoTexto=nuevoTexto.slice(0, -1);
        }
        return nuevoTexto;
    }
    function contarPalabras() {
        let textoLimpio=limpiarEspacios();
        if (textoLimpio=="") return 0;

        let palabras = 1;
        for (let i=0; i<textoLimpio.length; i++) {
            if (textoLimpio[i]==" ") {
                palabras++;
            }
        }
        return palabras;
    }
    return contarPalabras();
}
console.log(procesarTexto(" hola     como       estas     "));