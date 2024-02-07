/*import { listaProductos } from "./products-listing";}

 Variables que traemos de nuestro html
const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const contenedor = document.getElementById('contenedor');
const productosCompra = document.getElementById('productosCompra');
const numero = document.getElementById("numero");
const total = document.getElementById('total');
const x = document.getElementById('x') 
const btnAddToCart = document.getElementById('btnAddToCart') */

//VISUALIZACION CART
const cartButton = document.getElementById("btnCart");
const modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal");

const toggleModal = (button, modal) => {
    button.addEventListener("click", () => {
        modal.classList.toggle("hidden");
        modal.classList.toggle("show");
    })
}


toggleModal(cartButton, modal);
toggleModal(closeButton, modal);

/*
// Variables que vamos a usar en nuestoro proyecto
let lista = []
let valortotal = 0

window.addEventListener('load', () => {
    visualizarProductos();
    //contenedorCompra.classList.add("none")
})


// Imprimir la card gabi
const listaImpresa = (contenedor, lista) => {
  contenedor.innerHTML = "";
  lista.forEach(item => {
    let cardActive = "";
      if (item.id === 1) {
          cardActive = "contenedor";
      }
      contenedor.innerHTML += `
        <article class="cards ${cardActive}" data-click="card"">
          <img src="${item.imagen[0]}" alt="${item.nombre}" data-click="card">
          <h2 data-click="card">${item.nombre}</h2>
          <span data-click="card">$${item.precio}</span>
        </article>
      `
  })

}
// Pasamos los parametros a la funcion y le decimos cuantas cards mostrar en el inicio:
listaImpresa(cardsContainer, listaProductos.slice(0, 1));

//imprimir segun profe

const idProduct = JSON.parse(localStorage.getItem("idProduct"));

const selectedProduct = productos.find((product) => product.id == idProduct);
console.log(selectedProduct);

const printCategories = (categoriesList) => {
  let html = "";
  categoriesList.forEach((element) => {
    html += `<span>${element}</span>`;
  });

  return html;
};

//VISUALIZAR PRODUCTO CLICKEADO
function visualizarProductos() {
    contenedor.innerHTML = ""
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].existencia > 0) {
            contenedor.innerHTML += `<div><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><button onclick=comprar(${i})>Comprar</button></div></div>`
        }
        else {
            contenedor.innerHTML += `<div><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><p class="soldOut">Sold Out</p></div></div>`
        }
    }
}

//COMPRAR BOTON
function comprar(indice) {
    //INFO QUE TRAERA
    lista.push({ nombre: productos[indice].nombre, precio: productos[indice].valor })
//ELIMINAR PRODUCTS DEL STOCK QUE COMPRAN 
    let van = true
    let i = 0
    while (van == true) {
        if (productos[i].nombre == productos[indice].nombre) {
            productos[i].existencia -= 1
            if (productos[i].existencia == 0) {
                visualizarProductos()
            }
            van = false
        }
        listaProductos("productos", productos)
        i += 1
    }
    numero.innerHTML = lista.length
    numero.classList.add("diseñoNumero")
    return lista
}

//CARRITO LISTA DE COMPRAS 

function mostrarElementosLista() {
    productosCompra.innerHTML = ""
    valortotal = 0
    for (let i = 0; i < lista.length; i++){
        productosCompra.innerHTML += `<div><div class="img"><button onclick=eliminar(${i}) class="botonTrash"><img src="/img/trash.png"></button><p>${lista[i].nombre}</p></div><p> $${lista[i].precio}</p></div>`
        valortotal += parseInt(lista[i].precio)
    }
    total.innerHTML = `<p>Valor Total</p> <p><span>$${valortotal}</span></p>`
}*/