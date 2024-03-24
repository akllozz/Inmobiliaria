const propiedades_venta = [
    {
        // APARTAMENTO 1
    nombre: 'Apartamento de lujo en zona exclusiva',
    src:'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 2,
    costo: 5000,
    smoke: false,
    pets: true
    },
            // APARTAMENTO 2
    {nombre: 'Apartamento acogedor en la montaña',
    src:'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 2,
    costo: 1200,
    smoke: true,
    pets: true},
                // APARTAMENTO 3
    {nombre: 'Penthouse de lujo con terraza panorámica',
    src:'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true},

                // APARTAMENTO 4
    {nombre: 'Apartamento de lujo en zona exclusiva',
    src:'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 3,
    baños: 3,
    costo: 5000,
    smoke: false,
    pets: false}
    ];

const ven = document.querySelector("#venta");

var iconpata = "&#xf1b0;"
var iconban = "&#xf05e;"

var iconsmoke = "&#x1f6ac"
var iconsmokeban = "&#x1f6ad"


var almacenada = ""

for (let apto of propiedades_venta){
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

ven.innerHTML = almacenada;