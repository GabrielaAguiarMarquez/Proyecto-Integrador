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
    imagen: [
      "../Assets/1Home-Page/jewelry/EleganceEarrings.jpg"],
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

// Obtener el ID del producto de la URL
const urlParams = new URLSearchParams(document.location.search);
const productId = urlParams.get("id");

// Mostrar un mensaje de alerta con el ID del producto
console.log(`Hiciste clic en el producto con el ID: ${productId}`);


//VISUALIZACION CART
const cartButton = document.getElementById("btnCart");
const modal = document.querySelector(".section__modal-container");
const closeButton = document.getElementById("closeModal");

const toggleModal = (button, modal) => {
    button.addEventListener("click", () => {
        // modal.classList.toggle("hidden");
        modal.classList.toggle("show");
    })
}

toggleModal(cartButton, modal);
toggleModal(closeButton, modal);


// Buscar en el array el producto, si lo consigue lo imprimiremos en la pantalla

const cardsContainer = document.getElementById("productDetails");
const navShop = document.getElementById("navShop");
const containerCart = document.getElementById('containerCart')

const printedList = (containerDetails, containerNav, containerModal, lista) => {
  const item = lista.find((producto) => producto.id == productId);
  if (item) {
    containerNav.innerHTML = "";
    containerNav.innerHTML = `
        <ul class="main__nav-list">
          <li><a class="main__nav-link" href="../index.html">Home<span class="main__link-arrows"> <i class="fa-solid fa-angle-right"></i></span></a></li>
          <li><a class="main__nav-link" href="../views/products-listing.html">Shop<span class="main__link-arrows"> <i class="fa-solid fa-angle-right"></i> </span></a></li>
          <li><a class="main__nav-link">${item.nombre}</a></li>
      </ul>
    `;

    containerDetails.innerHTML = "";
    containerDetails.innerHTML += `
        <div class="section-product">
        <article class="section-product__container-img">
        <figure class="section-product__figure-first">
            <img class="section-product__reference-img section-product__reference-img--active"
            src="${item.imagen[0]}" alt="${item.nombre}">
            <img class="section-product__reference-img" src="${item.imagen[0]}" alt="
            Golden Aventurine ring and calaite ring">
            <img class="section-product__reference-img" src="${item.imagen[0]}"
            alt="${item.nombre}">
            <img class="section-product__reference-img" src="${item.imagen[0]}"
            alt="${item.nombre}">
        </figure>
    
        <figure class="section-product__figure-second">
            <span><i class="section-product__favorite-icon section-product__favorite-icon--hover fa-regular fa-heart"></i></span>
            <img class="section-product__ring-img" src="${item.imagen[0]}" alt="
            ${item.nombre}">
        </figure>
        </article>
    </div>
    
    <div class="section-product__container">
        <section class="section-product__containerPrice">
        <h1 class="section-product__title">${item.nombre}</h1>
    
        <p class="section-product__code">Code: ${item.codigo}</p>
    
        <h3 class="section-product__price">${item.precio}</h3>
    
        <p class="section-product__color-product">Color - Rose Gold</p>
    
        <span class="section-product__containerCircles">
            <div class="section-product__circle"></div>
            <div class="section-product__circle section-product__circle--active"></div>
        </span>
        </section>
    
        <section class="section-product__container-size">
        <section class="section-product__description-size">
            <p class="section-product__size">Size - 48</p>
            <p class="section-product__question">What is my size?</p>
        </section>
        <section class="section-product__container-button-size">
            <button class="section-product__size-button section-product__size-button--active">48</button>
            <button class="section-product__size-button">50</button>
            <button class="section-product__size-button">52</button>
            <button class="section-product__size-button">54</button>
            <button class="section-product__size-button">56</button>
            <button class="section-product__size-button">58</button>
            <button class="section-product__size-button">60</button>
            <button class="section-product__size-button">62</button>
            <button class="section-product__size-button">64</button>
            <button class="section-product__size-button">65</button>
            <button class="section-product__size-button">68</button>
            <button class="section-product__size-button">70</button>
        </section>
    
        </section>
    
        <section class="section-product__container-quantity">
        <p class="section-product__required-quantity">Quantity</p>
        <div>
            <button class="section-product__button-quantity" id="btn-minus">-</button>
            <button class="section-buttonProduct__button-quantity" id="quantityProducts">1</p>
            <button class="section-product__button-quantity" id="btn-plus">+</button>
        </div>
        </section>
    
        <section class="section-product__container-buy">

        <div class="section-product__btn-container">
          <button id="btnAddToCart" class="section-product__add-buy">
              <img class="section-product__cart-buy" src="/Assets/product-details/Add shopping cart.svg" alt="Add shopping cart">
              <span class="section-product__text-button " id="addToCart">
                Add to bag
              </span>
          </button>
          <button class="section-product__buy-now">
              Buy now
          </button>
        </div>
    
        <section class="section-product__container-payment-options">
            <div class="section-product__payment-options">
            <select class="section-product__payment-select" name="delivery">
                <option value="delivery">Delivery</option>
            </select>
            <select class="section-product__payment-select" name="payment">
                <option value="Payment">Payment</option>
            </select>
            </div>
    
            <div class="section-product__payment-options">
            <select class="section-product__payment-select" name="Warranty">
                <option value="Warranty">Warranty</option>
            </select>
            <select class="section-product__payment-select" name="Care">
                <option value="Care">Care</option>
            </select>
            </div>
        </section>
        </section>
    
    </div>
        `;

        /* =============== Cantida de productos: Botones  ================*/

const minus = document.getElementById("btn-minus");
const plus = document.getElementById("btn-plus");
const quantity = document.getElementById("quantityProducts");

let counter = 1;

minus.addEventListener("click", () => {
  if (counter > 1) {
    counter--;
    quantity.textContent = counter;
  }
});

plus.addEventListener("click", () => {
  counter++;
  quantity.textContent = counter;
});

        /* =============== Productos carrito  ================*/
        let buttonClicked = false;

        const añadir = document.getElementById('addToCart');

// Cuando cargo la page, busca en el localStorage e imprime lo que se guardo
window.addEventListener('load', () => {
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  if (storedCart && storedCart.length > 0) {
    storedCart.forEach(product => {
      showProductInCart(product);
    });
  }
});
        
añadir.addEventListener("click", () => {
  buttonClicked = true;
  console.log(`Hiciste clic en el botón addToCart, con el id ${productId}`);

  if (buttonClicked) {
    // Agrega el producto al carrito
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.push(item);
    localStorage.setItem('cart', JSON.stringify(storedCart));

    // Muestra el producto en el carrito
    showProductInCart(item);
  }
});
let totalProducts = 0;

// Función para mostrar el producto en el carrito
const showProductInCart = (product) => {
  // Incrementa el total de productos
  totalProducts += counter;

  // Muestra el producto en el carrito
  containerModal.innerHTML += `
    <section class="section__purchase-details">
      <figure class="section__products-details-container">
        <img class="section__products-details-img" src="${product.imagen[0]}" alt="${product.nombre}">
        <figcaption>
          <div class="section__products-details-textContainer">
            <h3 class="section__products-details-title">${product.nombre}</h3>
            <i class="section__products-details-edit fa-solid fa-pencil"></i>
          </div>
          <p class="section__products-details-code">Code: ${product.codigo}</p>
          <div class="section__products-details-priceContainer">
            <h4 class="section__products-details-price">$${product.precio}</h4>
            <p class="section__products-details-counter">x${counter}</p>
          </div>
        </figcaption>
      </figure>
      <hr class="section__products-details-separator">
    </section>
  `;

  // Actualiza la sección de total de productos
  updateTotalProducts();
}


// Función para actualizar el total de productos en la sección correspondiente
function updateTotalProducts() {
  // Busca la sección de total de productos
  const totalProductsSection = document.getElementById('containerTotal');

  // Actualiza el contenido con el total de productos
  totalProductsSection.innerHTML = `
  <hr class="section__products-details-separator">
    <div class="section__products-details-total">
      <p class="section__products-details-titleTotal">Total:</p>
      <h4 class="section__products-details-total">$${calculateTotal()}</h4>
    </div>
    <button class="section__products-details-btn">Continue to check out</button>

  `;
}

// Función para calcular el total de la compra
const calculateTotal = () => {
  return (listProducts[productId - 1].precio * totalProducts).toFixed(2);
}
  }
};

printedList(cardsContainer, navShop, containerCart, listProducts);

/* =============== Agregar al carrito  ================*/

