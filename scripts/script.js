// 1.1 Declarar una lista de los productos con los siguientes datos: id, nombre, código, precio unitario, tipo de accesorio (anillo, brazalete, collar, aretes, etc.), imágenes, descripción, cantidad en stock por color y/o talla.
const listaProductos = [
  // Productos en el index
  {
    id: 1,
    nombre: "Radiance Necklace",
    codigo: "#A0001",
    precio: 168.76,
    tipo: "Juego de joyas",
    imagen: ["../Assets/1Home-Page/3Productos/Image 1.png"],
    descripcion: "Juego de oro 6 piezas",
    stock: {
      cantidadDorado: 20,
      cantidadPlateado: 30,
      cantidadRosa: 20,
    },
  },
  {
    id: 2,
    nombre: "Exquisite Earrings",
    codigo: "#A0002",
    precio: 125.28,
    tipo: "Aretes",
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
    codigo: "#A0003",
    precio: 620.73,
    tipo: "Gargantilla",
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
    codigo: "#A0017",
    precio: 620.73,
    tipo: "Anillo",
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
    codigo: "#A0005",
    precio: 168.76,
    tipo: "Anillo",
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
    codigo: "#A0006",
    precio: 620.73,
    tipo: "Aretes",
    imagen: ["../Assets/1Home-Page/jewelry/Jewelry 1.jpg"],
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
    codigo: "#A0007",
    precio: 327.71,
    tipo: "Prendedor",
    imagen: ["../Assets/1Home-Page/jewelry/Jewelry 4.jpg"],
    descripcion: "Prendedores de lujo",
    stock: {
      cantidadDorado: 40,
      cantidadPlateado: 10,
      cantidadRosa: 10,
    },
  },
  // Products-listing
  {
    id: 8,
    nombre: "Luxury Gems Necklace",
    codigo: "#A0008",
    precio: 168.76,
    tipo: "Gargantilla",
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
    codigo: "#A0016",
    precio: 168.76,
    tipo: "Anillo",
    imagen: ["../Assets/2Our-Products/2Products_img/Img 1-2-c-c-d-d page 2.png"],
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
    codigo: "#A0010",
    precio: 620.73,
    tipo: "Gargantilla",
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
    codigo: "#A0011",
    precio: 327.71,
    tipo: "Anillo",
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
    codigo: "#A0012",
    precio: 168.76,
    tipo: "Anillo",
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
    codigo: "#A0013",
    precio: 168.76,
    tipo: "Aretes",
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
    codigo: "#A0014",
    precio: 620.73,
    tipo: "Aretes",
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
    codigo: "78205",
    precio: 620.73,
    tipo: "Anillo",
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
    codigo: "#A0009",
    precio: 125.28,
    tipo: "Anillo",
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
    codigo: "#A0004",
    precio: 620.73,
    tipo: "Aretes",
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
    codigo: "#A0018",
    precio: 620.73,
    tipo: "Anillo",
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
    codigo: "#A0019",
    precio: 620.73,
    tipo: "Anillo",
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
  // Checkout-payment-success
  {
    id: 20,
    nombre: "Exquisite Ornaments",
    codigo: "#A0020",
    precio: 125.28,
    tipo: "Aretes",
    imagen: ["../Assets/Checkout-payment/3YouMay-Like/2Exquisite Ornaments.jpg"],
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
    codigo: "#A0021",
    precio: 168.76,
    tipo: "Anillo",
    imagen:["../Assets/Checkout-payment/3YouMay-Like/1Shimmering Stones.jpg"],
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

// Convertir los nombres de los productos a minuscula
listaProductos.forEach((producto) => {
  producto.nombre = producto.nombre.toLowerCase();
});


// 2.1 Escribir una función que reciba como parámetros un array de productos y el nombre de un tipo de producto, que utilice la función de array que permita filtrar la lista por la categoría o tipo y devuelva el array resultante.

const productosPorTipo = (productos, tipo) => {
  return productos.filter((producto) => {
    return producto.tipo === tipo;
  });
};

// 2.2 Luego, llamar la función pasándole como argumentos la lista de productos declarado en el ítem anterior y cualquier tipo de accesorio que exista en la lista y, por último, mostrar el resultado en la consola del navegador.

console.log('Productos tipo anillo:');
console.log(productosPorTipo(listaProductos, "Anillo"));

console.log('Productos tipo aretes:');
console.log(productosPorTipo(listaProductos, "Aretes"));

console.log('Productos tipo gargantilla:');
console.log(productosPorTipo(listaProductos, "Gargantilla"));

console.log('Productos tipo prendedor:');
console.log(productosPorTipo(listaProductos, "Prendedor"));

console.log('Productos tipo juego de joyas:');
console.log(productosPorTipo(listaProductos, "Juego de joyas"));

//3.1 Escribir una función que realice la búsqueda de productos por nombre, reciba como parámetro un array de productos y un término de búsqueda (es decir, una cadena de caracteres) y retorne un array con todos los productos cuyos nombres contengan los caracteres del segundo parámetro.

const terminos = prompt("Ingrese el término de búsqueda: ");

function busquedaProductos(products, busquedaTerm) {
  return products.filter((product) =>
    product.nombre.includes(busquedaTerm.toLowerCase())
  );
}

// 3.2 Luego, llamar la función pasándole como argumentos datos de prueba y mostrar el resultado en la consola del navegador.

const resultadosBusqueda = busquedaProductos(listaProductos, terminos);
console.log('Resultados de la busqueda por nombre: ')
console.log(resultadosBusqueda);

// 4.1 Crear una función que ordene un array de productos por precios de manera ascendente y descendente y retorne el array resultante.

const productosPorPrecio = (productos, ascendente = true) => {
  const productosCopia = Array.from(productos);

  productosCopia.sort((primerElem, segundoElem) => {
    return ascendente
      ? primerElem.precio - segundoElem.precio
      : segundoElem.precio - primerElem.precio;
  });

  return productosCopia;
};

// 4.2 Ejecutar la función y mostrar el resultado en consola.

console.log("Orden ascendente:");
console.log(productosPorPrecio(listaProductos, true));
console.log("Orden descendente:");
console.log(productosPorPrecio(listaProductos, false));

//5.1 Crear una función que calcule el total a pagar de una compra, reciba como parámetros un array de productos donde cada producto, tenga como propiedades la cantidad y precio unitario del producto y devuelva el valor que corresponda a la sumatoria de la cantidad por el precio de cada producto.

const calcularTotalPago = (productos) => {
  let total = 0;
  for (const producto of productos) {
    total += producto.cantidad * producto.precio;
  }
  return total;
};

const productosCompra = [
  {
    id: 21,
    nombre: "Shimmering Stones",
    cantidad: 1,
    precio: 168.76,
  },
  {
    id: 17,
    nombre: "Blissful Bloom Ring",
    cantidad: 2,
    precio: 620.73,
  },
];

// 5.2 Ejecutar la función con datos de prueba y mostrar el resultado en la consola del navegador.

const totalPago = calcularTotalPago(productosCompra);
console.log(`El total a pagar es: ${totalPago}`);
