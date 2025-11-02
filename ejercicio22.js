function descargarArchivo(url, callback) {
    console.log("Descargando...");
    callback(url);
}
function mostrarMensaje(url) {
    console.log(`Descarga completa de ${url}`);
}

descargarArchivo("https://archivo.com/video.mp4", mostrarMensaje);