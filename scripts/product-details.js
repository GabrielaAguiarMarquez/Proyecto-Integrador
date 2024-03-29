//URL_BASE = "https://mini-back-proyec-dev-bzzr.1.us-1.fl0.io/";
//Array de Productos
const listProducts = [
  {
    id: 1,
    nombre: "Radiance Necklace",
    codigo: "78205",
    precio: 168.76,
    tipo: "Bracelets",
    imagen: [
      "../Assets/1Home-Page/3Productos/Image 1.png",
      "https://i.pinimg.com/564x/42/bd/fc/42bdfc2a21aad46c3bcfe78f08188126.jpg",
      "https://i.pinimg.com/564x/3d/7b/d4/3d7bd49aeb6dc1f8f7dffa5b0aed247b.jpg",
      "https://i.pinimg.com/564x/10/a5/00/10a500725d48a64a09cbeb2aa1873f48.jpg",
      "https://i.pinimg.com/564x/55/d3/10/55d3104fd8d3ba2134a29d41bdf3dd17.jpg",
    ],
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
    imagen: [
      "../Assets/1Home-Page/3Productos/Image 2.png",
      "https://i.pinimg.com/564x/d3/ed/6c/d3ed6c0bdd7a34a7185c746b0a898344.jpg",
      "https://i.pinimg.com/564x/44/33/4f/44334fe9bcd126351f037664e062b363.jpg",
      "https://i.pinimg.com/564x/6d/57/68/6d57688213084c3ac4ea970913a20632.jpg",
      "https://i.pinimg.com/564x/ce/85/c3/ce85c3fd62e115a472bbcc2c7a4f70e2.jpg",
    ],
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
    imagen: [
      "../Assets/1Home-Page/3Productos/Image 3.png",
      "https://i.pinimg.com/564x/ea/24/82/ea2482cbd8b3a7e3d977e6d1d4784574.jpg",
      "https://i.pinimg.com/564x/08/cc/47/08cc47c25b322b72fbd987ebb42da03a.jpg",
      "https://i.pinimg.com/564x/b6/0b/64/b60b64e94c845078bd7e1f58a6a0a6b5.jpg",
      "https://i.pinimg.com/564x/e8/03/c5/e803c56fd8ddea2d3eec2dc3ddb294e7.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 4-c page 2.png",
      "https://i.pinimg.com/564x/5c/f6/b0/5cf6b0dd1f5be2e953664a882d929051.jpg",
      "https://i.pinimg.com/564x/d3/95/cc/d395cc3762dbd6d043bd61a1c9a95135.jpg",
      "https://i.pinimg.com/564x/82/e6/48/82e6486668a0dbbce7390829a89e6abf.jpg",
      "https://i.pinimg.com/564x/1c/22/87/1c228718872fbefaa7cf7c704dcbc155.jpg",
    ],
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
    imagen: [
      "../Assets/1Home-Page/jewelry/Jewelry 1.jpg",
      "https://i.pinimg.com/564x/09/08/cb/0908cb4237a322eca720215c265636f7.jpg",
      "https://i.pinimg.com/564x/c6/40/fa/c640fa6d5ef180dbb30852a3b8074866.jpg",
      "https://i.pinimg.com/564x/e1/9e/43/e19e43beeb506db259d4d1790c27f30d.jpg",
      "https://i.pinimg.com/564x/44/4f/9d/444f9d44c00273c0cd47df6fa439daff.jpg",
    ],
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
      "../Assets/1Home-Page/jewelry/EleganceEarrings.jpg",
      "https://i.pinimg.com/564x/d8/c9/e1/d8c9e13a72d931a69f6fd67163eb35dd.jpg",
      "https://i.pinimg.com/564x/44/26/33/4426334314c82d8aa11c05bcd1509d01.jpg",
      "https://i.pinimg.com/564x/62/b4/22/62b4224bba6170bb4e0498814a7dcd02.jpg",
      "https://i.pinimg.com/564x/da/ab/e9/daabe935c3c2b18d2ab913a3991fb3b4.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 1-a page 2.png",
      ,
      "https://i.pinimg.com/564x/aa/2d/8a/aa2d8a9f7a83a0bb4a5f1974bf6fe897.jpg",
      "https://i.pinimg.com/564x/13/4e/08/134e0844af41ce65c61c10194b385d6e.jpg",
      "https://i.pinimg.com/736x/6d/65/55/6d6555392cbe1297e08edbdaa42d9fbd.jpg",
      "https://i.pinimg.com/564x/dc/3e/f0/dc3ef06f1ab4be9851ca4d7b46e4e0f3.jpg",
    ],
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
      "https://i.pinimg.com/564x/20/2e/f1/202ef113f6a089ea4980973d0e580b47.jpg",
      "https://i.pinimg.com/564x/05/b9/00/05b900e5645e92409c4a59af0e06dac5.jpg",
      "https://i.pinimg.com/564x/66/6b/07/666b07a15b9036b6593fb99b746163f5.jpg",
      "https://i.pinimg.com/564x/96/dd/72/96dd720679af34d0f363a2562505f456.jpg",
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 3-a page 2.png",
      ,
      "https://i.pinimg.com/564x/8e/67/cb/8e67cbd30108c9759d96729a7631401a.jpg",
      "https://i.pinimg.com/564x/4f/c4/b2/4fc4b2496968f735b04e5331c1c96b89.jpg",
      "https://i.pinimg.com/564x/8a/77/88/8a778856b5dfebeeb7cfc476145be3a1.jpg",
      "https://i.pinimg.com/564x/1d/5c/39/1d5c391b833bf21e786abe835bbc93b5.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 4-a page 2.png",
      ,
      "https://i.pinimg.com/564x/6c/f2/46/6cf2467fa8bea45ddf11529e62221fb1.jpg",
      "https://i.pinimg.com/564x/20/4c/94/204c949d72eb918dc0cade752276351f.jpg",
      "https://i.pinimg.com/564x/55/b9/75/55b9755fca34a7ee6030da7f6fb72970.jpg",
      "https://i.pinimg.com/564x/5b/54/2d/5b542deb9fa26c8bba7e75576959a374.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 1-b page 2.png",
      "https://i.pinimg.com/564x/6a/9f/2c/6a9f2c4a9600b8f093eb0e6e3a532343.jpg",
      "https://i.pinimg.com/564x/36/d2/f3/36d2f3e903df5b66aa48873ab6ff1aa4.jpg",
      "https://i.pinimg.com/564x/63/25/b6/6325b66a960d457c03edf1df0cf07418.jpg",
      "https://i.pinimg.com/564x/0e/42/cc/0e42cc8d9d983905aa2e8f8d1accfd0b.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 2-b page 2.png",
      "https://i.pinimg.com/564x/a9/9e/97/a99e97bb9a1f4d939d2b5004ba036bc4.jpg",
      "https://i.pinimg.com/564x/2d/6b/ca/2d6bca0ef07fc77504393c1610a2098c.jpg",
      "https://i.pinimg.com/564x/6a/9d/e7/6a9de7ccc2f06a27b341fba8b794e3ae.jpg",
      "https://i.pinimg.com/564x/a6/02/85/a60285661336402112ce9999d917ceee.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 3-b page 2.png",
      "https://i.pinimg.com/564x/65/c9/93/65c993df15e0f6e9dd5fee0b9da9c9f8.jpg",
      "https://i.pinimg.com/564x/fb/e9/a6/fbe9a63ea56aff6d36838f6b9db7c9a6.jpg",
      "https://i.pinimg.com/564x/7b/56/28/7b56280cc8dcb0360ef9375ad7cae9c3.jpg",
      "https://i.pinimg.com/564x/73/74/c7/7374c7b741072fa73fd3e269cb40ef05.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 3-c page 2.png",
      "https://i.pinimg.com/564x/20/d0/88/20d088c93f49f9946c9f2620dde5ec2b.jpg",
      "https://i.pinimg.com/564x/2c/61/4a/2c614adcc581dc58b360135ccc532ead.jpg",
      "https://i.pinimg.com/564x/2a/9b/ef/2a9befeab9ca697965f573331d83acb2.jpg",
      "https://i.pinimg.com/564x/1f/29/7e/1f297ea674e1bb42c5ca4af62006303b.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 2-a page 2.png",
      "https://i.pinimg.com/564x/d5/76/71/d5767156e21bea8bcc1fff8e54ca6523.jpg",
      "https://i.pinimg.com/564x/bc/f9/7e/bcf97e60f717da8429217a34004c5c8d.jpg",
      "https://i.pinimg.com/564x/83/21/c9/8321c9a7475045f8376b5be57fbfc708.jpg",
      "https://i.pinimg.com/564x/88/75/fd/8875fdc136fc6bee564d1f152d73dff4.jpg",
    ],
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
    imagen: [
      "../Assets/1Home-Page/3Productos/Image 4.png",
      "https://i.pinimg.com/564x/f0/82/62/f082629ea1a2156a5e04cc3c93549887.jpg",
      "https://i.pinimg.com/564x/d3/1b/65/d31b659834af38cb51d121db0d301fde.jpg",
      "https://i.pinimg.com/564x/71/38/b9/7138b9dc02d4b9d3b65326e38d134eda.jpg",
      "https://i.pinimg.com/564x/9c/8b/1b/9c8b1b02465dd9ea26a61f853ffa134f.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 3-d page 2.png",
      "https://i.pinimg.com/564x/22/f7/84/22f78490f74d3783071fa5832f36ebea.jpg",
      "https://i.pinimg.com/564x/ec/82/75/ec8275627ce184f2e4c4b4f16f35114b.jpg",
      "https://i.pinimg.com/564x/cd/1b/06/cd1b06eb6c42664d3978029d99cd6c74.jpg",
      "https://i.pinimg.com/564x/b9/46/e3/b946e33e7af9b0beee5301fc37b03026.jpg",
    ],
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
    imagen: [
      "../Assets/2Our-Products/2Products_img/Img 4-d page 2.png",
      "https://i.pinimg.com/564x/c1/61/a7/c161a7adb000bbb1554c8bafb0debfd4.jpg",
      "https://i.pinimg.com/564x/4c/d4/98/4cd49871b4bb0231137177a1c4861158.jpg",
      "https://i.pinimg.com/564x/e2/a9/98/e2a9980331e4b36fae8d8e4ad815fd74.jpg",
      "https://i.pinimg.com/564x/7a/e4/52/7ae45248952359f47f7f69e0337265b1.jpg",
    ],
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
      "https://i.pinimg.com/564x/58/95/cd/5895cdf739d76d1ef63129c67d02e74c.jpg",
      "https://i.pinimg.com/564x/d7/9a/e9/d79ae927f33bb4d1c5e341471131a04c.jpg",
      "https://i.pinimg.com/564x/25/31/6a/25316a78f4c350a2d7dd93d6f1f4cd28.jpg",
      "https://i.pinimg.com/564x/ba/93/8f/ba938f4e9ea2d94637d8423fa763491c.jpg",
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
    imagen: [
      "../Assets/Checkout-payment/3YouMay-Like/1Shimmering Stones.jpg",
      ,
      "https://i.pinimg.com/564x/b9/6c/1a/b96c1a22fe645a4d0649dc4485e4e828.jpg",
      "https://i.pinimg.com/564x/92/be/f6/92bef6c3f2997d23b1507ee308ddc077.jpg",
      "https://i.pinimg.com/564x/7b/68/81/7b6881393cc354e5c396d976464916a8.jpg",
      "https://i.pinimg.com/564x/35/9a/8e/359a8e0e7491abc8db25cfbb332fa286.jpg",
    ],
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

const urlParams = new URLSearchParams(document.location.search);
const productId = urlParams.get('id');
const contenedorCards = document.getElementById('productDetails');
const contenedorNav = document.getElementById('navShop');
//VISUALIZACION CART
const cartButton = document.getElementById("btnCart");
const modal = document.querySelector(".section__modal-container");
const cardsModal = document.querySelector('#containerCart');
const closeButton = document.getElementById("closeModal");

const btnCarrito = document.getElementById('addToCart');

// Función para mostrar u ocultar el modal
const toggleModal = (button, modal) => {
  button.addEventListener("click", () => {
    modal.classList.toggle("show");
  });
};
toggleModal(cartButton, modal);
toggleModal(closeButton, modal);

const detalleProducto = (contNav, contCard, lista) => {
  const producto = lista.find((buscar) => buscar.id == productId);
  if(producto) {
    contNav.innerHTML = '';
    contNav.innerHTML = 
    `
          <ul class="main__nav-list">
            <li><a class="main__nav-link" href="../index.html">Home<span class="main__link-arrows"> <i class="fa-solid fa-angle-right"></i></span></a></li>
            <li><a class="main__nav-link" href="../views/products-listing.html">Shop<span class="main__link-arrows"> <i class="fa-solid fa-angle-right"></i> </span></a></li>
            <li><a class="main__nav-link">${producto.nombre}</a></li>
        </ul>
      `;
      contCard.innerHTML = '';
      contCard.innerHTML = 
      `
      <div class="section-product">
      <article class="section-product__container-img">
      <figure class="section-product__figure-first">
          <img class="section-product__reference-img section-product__reference-img--active"
          src="${producto.imagen[1]}" alt="${producto.nombre}">
          <img class="section-product__reference-img" src="${producto.imagen[2]}" alt="
          Golden Aventurine ring and calaite ring">
          <img class="section-product__reference-img" src="${producto.imagen[3]}"
          alt="${producto.nombre}">
          <img class="section-product__reference-img" src="${producto.imagen[4]}"
          alt="${producto.nombre}">
      </figure>
  
      <figure class="section-product__figure-second">
          <span><i class="section-product__favorite-icon section-product__favorite-icon--hover fa-regular fa-heart"></i></span>
          <img class="section-product__ring-img" src="${producto.imagen[0]}" alt="
          ${producto.nombre}">
      </figure>
      </article>
  </div>
  
  <div class="section-product__container">
      <section class="section-product__containerPrice">
      <h1 class="section-product__title">${producto.nombre}</h1>
  
      <p class="section-product__code">Code: ${producto.codigo}</p>
  
      <h3 class="section-product__price">${producto.precio}</h3>
  
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
        <button onclick="addToCart()" class="section-product__add-buy">
            <img class="section-product__cart-buy" src="/Assets/product-details/Add shopping cart.svg" alt="Add shopping cart">
            <span class="section-product__text-button ">
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
  </div>`;
  const minus = document.getElementById('btn-minus');
const plus = document.getElementById('btn-plus');
let quantity = document.getElementById('quantityProducts');
let quantityCompra = document.getElementById('quantityCompra');
let counter = 1;

minus.addEventListener("click", () => {
    if(counter > 1) {
        counter--;
        quantity.textContent = counter;
        quantityCompra.textContent = `x${counter}`;
    }
});

plus.addEventListener("click", () => {
    counter++;
    quantity.textContent = counter;
    quantityCompra.textContent = `x${counter}`;
})

  } else {
    alert('Producto no encontrado.')
  }
};

// Carrito
document.addEventListener('DOMContentLoaded', function() {
  // Llama a addToCart() para cargar los productos del carrito desde el localStorage
  addToCart();
});


function addToCart() {
  const addProductToModal = (contModal, lista) => {
    const productId = urlParams.get('id');
    const producto = lista.find((buscar) => buscar.id == productId);
    if (producto) {  
      // Obtener los productos agregados al carrito del localStorage
      let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

      // Verificar si el producto ya existe en el carrito
      const existingProductIndex = cartProducts.findIndex(item => item.id == productId);

      if (existingProductIndex !== -1) {
        // Si el producto ya existe, actualizar la cantidad
        cartProducts[existingProductIndex].cantidad += 1;
      } else {
        // Si el producto no existe, agregarlo al carrito
        cartProducts.push({...producto, cantidad: 1});
      }

      // Guardar los productos actualizados en el localStorage
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

      // Renderizar los productos en el contenedor del modal
      contModal.innerHTML = "";
      cartProducts.forEach(producto => {
        contModal.innerHTML +=  
        `<section class="section__purchase-details">
          <figure class="section__products-details-container">
            <img class="section__products-details-img" src="${producto.imagen[0]}" alt="${producto.nombre}">
            <figcaption>
              <div class="section__products-details-textContainer">
                <h3 class="section__products-details-title">${producto.nombre}</h3>
                <i class="section__products-details-edit fa-solid fa-pencil"></i>
              </div>
              <p class="section__products-details-code">Code: ${producto.codigo}</p>
              <div class="section__products-details-priceContainer">
                <h4 class="section__products-details-price">$${producto.precio}</h4>
                <p class="section__products-details-counter" id="quantityCompra">1</p>
              </div>
            </figcaption>
          </figure>
          <hr class="section__products-details-separator">
        </section>`;
      });
    }
  }

  addProductToModal(cardsModal, listProducts);
}


detalleProducto(contenedorNav, contenedorCards, listProducts);






