
let contenedor = document.querySelector("#menu-navegacion");
let detalles = document.querySelector("#detalles-libro");

fetch("js/books.json")
  .then(respuesta => respuesta.json())
  .then(libros => {
    libros.forEach(libro => {
      contenedor.innerHTML += `
        <button class="btn btn-danger border border-secondary text-start"
                onclick="mostrarLibro('${libro.titulo}')">
          ${libro.titulo}
        </button>
      `;
    });

    mostrarLibro(libros[0].titulo);
  });

function mostrarLibro(titulo) {
  fetch("js/books.json")
    .then(respuesta => respuesta.json())
    .then(libros => {
      const libro = libros.find(libro => libro.titulo === titulo);

      detalles.innerHTML = `
        <div class="card-body">
          <h2 class="mb-4 card-title">${libro.titulo}</h2>

          <img
            src="${libro.imagen}"
            class="card-img-top img-fluid mb-4"
            alt="${libro.titulo}"
          >

          <p class="card-text">${libro.descripcion}</p>
        </div>

        <div class="card-footer">
          <a
            href="${libro.destino}"
            target="_blank"
            class="btn btn-outline-danger"
          >
            Conocer más
          </a>
        </div>
      `;
    });
}
