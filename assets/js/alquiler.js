const propiedades_alquiler = [
            // APARTAMENTO 1
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true
    },
        // APARTAMENTO 2
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true
    },
        // APARTAMENTO 3
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },
            // APARTAMENTO 4
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 3,
    baños: 2,
    costo: 2000,
    smoke: true,
    pets: false,
    },
    ];

const alq = document.querySelector("#alquiler");

var iconpata = "&#xf1b0;"
var iconban = "&#xf05e;"

var iconsmoke = "&#x1f6ac"
var iconsmokeban = "&#x1f6ad"

var almacenada = ""

for (let apto of propiedades_alquiler){

    almacenada +=  `

    <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${apto.src}"
        class="card-img-top"
        alt="Imagen del departamento"/>
      <div class="card-body">
        <h5 class="card-title">
          ${apto.nombre}
        </h5>
        <p class="card-text">
          ${apto.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${apto.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${apto.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${apto.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${apto.costo}</p>
        <p style= ${apto.smoke == true? "color:green" : "color:red"}> <i class=fa>${apto.smoke == true? iconsmoke : iconsmokeban }</i> ${apto.pets == true ?  "Permitido Fumar" : "No se permite fumar"}</p></p>
        <p style= ${apto.pets == true? "color:green" : "color:red"}> <i class=fa>${apto.pets == true? iconpata : iconban }</i> ${apto.pets == true ?  "Mascotas permitidas" : "No se permiten mascotas"}</p>
      </div>
    </div>
  </div>
    `;
}

alq.innerHTML = almacenada;