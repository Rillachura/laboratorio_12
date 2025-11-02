function mostrarDatos(nombre, edad, ...hobbies) {
    let listaHobbies="";
    for(let i=0; i<hobbies.length; i++){
        listaHobbies+=`Hobbie ${i+1}: ${hobbies[i]}\n`;
    }
    return `Nombre: ${nombre}\n` +
    `Edad: ${edad}\n` +
    `${listaHobbies}`;
}
console.log(mostrarDatos("Pepe", 15, "pintar", "cantar"));