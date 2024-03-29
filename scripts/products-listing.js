//URL_BASE = "https://mini-back-proyec-dev-bzzr.1.us-1.fl0.io/";
//Array de Productos
const listProducts = [
  {
    id: 1,
    nombre: "Radiance Necklace",
    codigo: "78205",
    precio: 168.76,
    tipo: "Bracelets",
    imagen: ["../Assets/1Home-Page/3Productos/Image 1.png"],
    descripcion: "Juego de brazaletes de oro",
    stock: {
      cantidadDorado: 20,
      cantidadPlateado: 30,
      cantidadRosa: 20,
    },
  },
  {
    id: 2,
    nombre: "Exquisite Earrings",
    codigo: "34892",
    precio: 125.28,
    tipo: "Earrings",
    imagen: ["../Assets/1Home-Page/3Productos/Image 2.png"],
    descripcion: "Aretes baño de oro",
    stock: {
      cantidadDorado: 30,
      cantidadPlateado: 20,
      cantidadRosa: 20,
    },
  },
  {
    id: 3,
    nombre: "Glamour Necklace",
    codigo: "61937",
    precio: 620.73,
    tipo: "Necklaces",
    imagen: ["../Assets/1Home-Page/3Productos/Image 3.png"],
    descripcion: "Gargantilla con baño de oro",
    stock: {
      cantidadDorado: 40,
      cantidadPlateado: 10,
      cantidadRosa: 10,
    },
  },
  {
    id: 4,
    nombre: "Blissful Bloom Ring",
    codigo: "20548",
    precio: 620.73,
    tipo: "Rings",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 4-c page 2.png"],
    descripcion: "Anillo de floración dichosa",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
  {
    id: 5,
    nombre: "Shimmering Ring",
    codigo: "75392",
    precio: 168.76,
    tipo: "Rings",
    imagen: ["../Assets/1Home-Page/jewelry/Jewelry 1.jpg"],
    descripcion: "Anillo brillante con piedra rubi.",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
  {
    id: 6,
    nombre: "Elegance Earrings",
    codigo: "48201",
    precio: 620.73,
    tipo: "Earrings",
    imagen: ["../Assets/1Home-Page/jewelry/EleganceEarrings.jpg"],
    descripcion: "Aretes delicados elegantes",
    stock: {
      cantidadDorado: 50,
      cantidadPlateado: 10,
      cantidadRosa: 10,
    },
  },
  {
    id: 7,
    nombre: "Luxury Charms Brooch",
    codigo: "93726",
    precio: 327.71,
    tipo: "Bracelets",
    imagen: ["../Assets/1Home-Page/jewelry/Jewelry 4.jpg"],
    descripcion: "Prendedores de lujo",
    stock: {
      cantidadDorado: 40,
      cantidadPlateado: 10,
      cantidadRosa: 10,
    },
  },
  {
    id: 8,
    nombre: "Luxury Gems Necklace",
    codigo: "15689",
    precio: 168.76,
    tipo: "Necklaces",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 1-a page 2.png"],
    descripcion: "Gargantilla con dije de diamante",
    stock: {
      cantidadDorado: 20,
      cantidadPlateado: 30,
      cantidadRosa: 10,
    },
  },
  {
    id: 9,
    nombre: "Timeless Elegance Ring",
    codigo: "24057",
    precio: 168.76,
    tipo: "Rings",
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 1-2-c-c-d-d page 2.png",
    ],
    descripcion: "Tres anillos con piedras incrustadas",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
  {
    id: 10,
    nombre: "Reflections Necklace",
    codigo: "80936",
    precio: 620.73,
    tipo: "Necklaces",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 3-a page 2.png"],
    descripcion: "Gargantilla resplandeciente con baño de oro",
    stock: {
      cantidadDorado: 40,
      cantidadPlateado: 10,
      cantidadRosa: 20,
    },
  },
  {
    id: 11,
    nombre: "Dreamy Infinity Ring",
    codigo: "57291",
    precio: 327.71,
    tipo: "Rings",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 4-a page 2.png"],
    descripcion: "Anillo con gema de amatista",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
  {
    id: 12,
    nombre: "Opulent Jewels Ring",
    codigo: "69348",
    precio: 168.76,
    tipo: "Rings",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 1-b page 2.png"],
    descripcion: "Anillo de joyas opulentas",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
  {
    id: 13,
    nombre: "Serene Solitaire Earrings",
    codigo: "40182",
    precio: 168.76,
    tipo: "Earrings",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 2-b page 2.png"],
    descripcion: "Pendientes Solitario Sereno",
    stock: {
      cantidadDorado: 40,
      cantidadPlateado: 10,
      cantidadRosa: 10,
    },
  },
  {
    id: 14,
    nombre: "Timeless Halo Earrings",
    codigo: "92837",
    precio: 620.73,
    tipo: "Earrings",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 3-b page 2.png"],
    descripcion: "Aretes de oro con opalo azul",
    stock: {
      cantidadDorado: 40,
      cantidadPlateado: 10,
      cantidadRosa: 10,
    },
  },
  {
    id: 15,
    nombre: "Luxury Charms Ring",
    codigo: "36519",
    precio: 620.73,
    tipo: "Rings",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 3-c page 2.png"],
    descripcion: "Anillo de encantos de lujo",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
  {
    id: 16,
    nombre: "Aurora Ring",
    codigo: "74028",
    precio: 125.28,
    tipo: "Rings",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 2-a page 2.png"],
    descripcion: "Anillos de brillantes",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
  {
    id: 17,
    nombre: "Delights",
    codigo: "51963",
    precio: 620.73,
    tipo: "Earrings",
    imagen: ["../Assets/1Home-Page/3Productos/Image 4.png"],
    descripcion: "Aretes con forma de delfín",
    stock: {
      cantidadDorado: 20,
      cantidadPlateado: 30,
      cantidadRosa: 20,
    },
  },
  {
    id: 18,
    nombre: "Sparkling Ring",
    codigo: "83715",
    precio: 620.73,
    tipo: "Rings",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 3-d page 2.png"],
    descripcion: "Anillo de diamantes",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
  {
    id: 19,
    nombre: "Glimmering Ring",
    codigo: "28574",
    precio: 620.73,
    tipo: "Rings",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 4-d page 2.png"],
    descripcion: "Anillo de oro con diamantes incrustados",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
  {
    id: 20,
    nombre: "Exquisite Ornaments",
    codigo: "61487",
    precio: 125.28,
    tipo: "Earrings",
    imagen: [
      "../Assets/Checkout-payment/3YouMay-Like/2Exquisite Ornaments.jpg",
    ],
    descripcion: "Aretes con baño de oro e incrustraciones de lujo",
    stock: {
      cantidadDorado: 30,
      cantidadPlateado: 10,
      cantidadRosa: 10,
    },
  },
  {
    id: 21,
    nombre: "Shimmering Stones",
    codigo: "93746",
    precio: 168.76,
    tipo: "Rings",
    imagen: ["../Assets/Checkout-payment/3YouMay-Like/1Shimmering Stones.jpg"],
    descripcion: "",
    stock: {
      cantidadRoseGold: {
        talla: {
          talla48: 3,
          tall50: 4,
          talla52: 3,
          talla54: 2,
          talla56: 1,
          talla58: 4,
          talla60: 5,
          talla62: 9,
          talla64: 8,
          talla66: 3,
          talla68: 2,
          talla70: 5,
        },
      },
      cantidadPlateado: {
        talla: {
          talla48: 3,
          tall50: 10,
          talla54: 2,
        },
      },
    },
  },
];

//VISUALIZACION CART
const cartButton = document.getElementById("btnCart");
const modal = document.querySelector(".section__modal-container");
const closeButton = document.getElementById("closeModal");

const toggleModal = (button, modal) => {
  button.addEventListener("click", () => {
    // modal.classList.toggle("hidden");
    modal.classList.toggle("show");
  });
};

toggleModal(cartButton, modal);
toggleModal(closeButton, modal);

// Capturar Id del contenedor de las cards
const productsListing = document.getElementById("productsListing");
const containerCart = document.getElementById("containerCart");

// Imprimir las cards de los productos en el html
const printedList = (container, containerModal, lista) => {
  container.innerHTML = "";
  lista.forEach((item) => {
    let cardActive = "";
    if (item.id === 9) {
      cardActive = "section__card--active";
    }
    container.innerHTML += `
        <article class="cards ${cardActive}" id=${item.id}>
          <img src="${item.imagen[0]}" alt="${item.nombre}" data-click="card">
          <h2 data-click="card">${item.nombre}</h2>
          <span data-click="card">$${item.precio}</span>
        </article>
      `;

    containerModal.innerHTML = "";
    containerModal.innerHTML = `
      <section class="section__purchase-details">
      <figure class="section__products-details-container">
        <img class="section__products-details-img" src="${item.imagen[0]}" alt="${item.nombre}">
        <figcaption>
          <div class="section__products-details-textContainer">
            <h3 class="section__products-details-title">${item.nombre}</h3>
            <i class="section__products-details-edit fa-solid fa-pencil"></i>
          </div>
          <p class="section__products-details-code">Code: ${item.codigo}</p>
          <div class="section__products-details-priceContainer">
            <h4 class="section__products-details-price">$${item.precio}</h4>
            <p class="section__products-details-counter">x1</p>
          </div>
        </figcaption>
      </figure>
      <hr class="section__products-details-separator">
    </section>
      `;
  });
};
// Pasamos los parametros a la funcion y le decimos cuantas cards mostrar en el inicio:
printedList(productsListing, containerCart, listProducts.slice(0, 15));

/* ======================================== Inicio de las Funciones =========================================== */

/* 1. FILTRO TIPO */

// Traer botones por el id
const all = document.getElementById("all");
const rings = document.getElementById("rings");
const bracelets = document.getElementById("bracelets");
const necklaces = document.getElementById("necklaces");
const earrings = document.getElementById("earrings");
// Regresesar los productos por defecto, al clickear 'ALL'
const productosPorDefecto = () => {
  printedList(productsListing, containerCart, listProducts.slice(0, 15));
};
// Concatenamos dos funciones para que nos filtre el producto pasando solamente 'tipo' como parametro
const filtrarProductos = (tipo) => {
  const productosPorTipo = (productos, tipo) => {
    return productos.filter((producto) => {
      return producto.tipo === tipo;
    });
  };
  const productosFiltrados = productosPorTipo(listProducts, tipo);
  printedList(productsListing, containerCart, productosFiltrados);
};

// Escuchamos el evento y asignamos funciones:

all.addEventListener("click", () => {
  productosPorDefecto();
});
rings.addEventListener("click", () => {
  filtrarProductos("Rings");
});
earrings.addEventListener("click", () => {
  filtrarProductos("Earrings");
});
necklaces.addEventListener("click", () => {
  filtrarProductos("Necklaces");
});
bracelets.addEventListener("click", () => {
  filtrarProductos("Bracelets");
});

/* 2. FILTRO NOMBRE */

// Definimos la función:
const busquedaProductos = (lista, palabra) => {
  return lista.filter((item) => {
    return item.nombre.toLowerCase().includes(palabra.toLowerCase());
  });
};
// Capturamos el Id del Input
const input = document.getElementById("promptBus");
// Escuchamos el evento enter y llamamos a la función. Damos como parametro: array y valor input. Devuelve la lista de las cards con los terminos de buqueda impresa
input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    const termino = input.value;
    const resultado = busquedaProductos(listProducts, termino);
    printedList(productsListing, containerCart, resultado);
  }
});

/* 3. PRECIO ASCENDENTE Y DESCENDENTE */

const productosPorPrecio = (productos, ascendente = true) => {
  const productosCopia = Array.from(productos);
  productosCopia.sort((primerElem, segundoElem) => {
    return ascendente
      ? primerElem.precio - segundoElem.precio
      : segundoElem.precio - primerElem.precio;
  });

  return productosCopia;
};

const select = document.getElementById("sortPrice");

select.addEventListener("change", (e) => {
  const eleccionUser = e.target.value;

  if (eleccionUser === "ascendant") {
    return printedList(
      productsListing,
      containerCart,
      productosPorPrecio(listProducts, true)
    );
  }
  return printedList(
    productsListing,
    containerCart,
    productosPorPrecio(listProducts, false)
  );
});

// Redericcionar las cards a la pagina de detalle-de-producto
const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const productId = e.target.closest(".cards").id;

    document.location.href = `/views/product-details.html?id=${productId}`;
  });
});
