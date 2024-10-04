// script.js

document.getElementById('botonDescubrir').addEventListener('click', determinarSigno);

function determinarSigno() {
    const anioInput = document.getElementById('anioNacimiento').value;
    const anio = parseInt(anioInput);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(anio)) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, ingresa un año válido.</p>";
        return;
    }

    // Mapeo de los signos según el resto de la división por 12
    const signos = [
        { nombre: "Rata", imagen: "imagenes/rata.jpeg" },
        { nombre: "Buey", imagen: "imagenes/buey.jpeg" },
        { nombre: "Tigre", imagen: "imagenes/tigre.jpeg" },
        { nombre: "Conejo", imagen: "imagenes/conejo.jpeg" },
        { nombre: "Dragón", imagen: "imagenes/dragon.jpeg" },
        { nombre: "Serpiente", imagen: "imagenes/serpiente.jpeg" },
        { nombre: "Caballo", imagen: "imagenes/caballo.jpeg" },
        { nombre: "Cabra", imagen: "imagenes/cabra.jpeg" },
        { nombre: "Mono", imagen: "imagenes/mono.jpeg" },
        { nombre: "Gallo", imagen: "imagenes/gallo.jepg" },
        { nombre: "Perro", imagen: "imagenes/perro.jpeg" },
        { nombre: "Cerdo", imagen: "imagenes/cerdo.jpeg" }
    ];

    // Calcular el resto para determinar el signo
    // 1900 es un año de la Rata
    const resto = (anio - 1900) % 12;
    const index = resto >= 0 ? resto : (resto + 12);
    const signo = signos[index];

    // Mostrar el resultado
    resultadoDiv.innerHTML = `
        <h2>Tu signo es: ${signo.nombre}</h2>
        <img src="${signo.imagen}" alt="${signo.nombre}">
    `;
}
