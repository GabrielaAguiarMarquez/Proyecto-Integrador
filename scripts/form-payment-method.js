// Array de métodos de pago
const listaMetodosPago = [];

// Función para recibir la información del formulario
const recibirForm = (evento) => {
  evento.preventDefault();

  // Obtener el formulario y sus datos
  const formulario = document.getElementById("usuarioForm");
  const formData = new FormData(formulario);

  // Convertir los datos del formulario a un objeto JSON
  const json = {
    email: formData.get("email"),
    name: formData.get("name"),
    number: formData.get("number"),
    date: formData.get("date"),
    cvv: formData.get("cvv"),
    nameCustomer: formData.get("nameCustomer"),
    numberPhone: formData.get("numberPhone"),
    address: formData.get("address"),
  };

  // Validar que todos los campos estén llenos
  if (
    relleno.name &&
    relleno.number &&
    relleno.email &&
    relleno.numberPhone &&
    relleno.cvv &&
    relleno.nameCustomer &&
    relleno.address &&
    relleno.date
  ) {
    // Si todos los campos están llenos, reiniciar el formulario y agregar el nuevo método de pago
    formulario.reset();
    agregarMetodo(
      json.email,
      json.name,
      json.number,
      json.date,
      json.cvv,
      json.nameCustomer,
      json.numberPhone,
      json.address
    );
    console.log("Método de pago: ", listaMetodosPago);
  } else {
    // Si no todos los campos están llenos, mostrar una alerta
    alert("Rellene todos los campos");
  }
};

// Función para agregar un nuevo método de pago al array
const agregarMetodo = (
  email,
  name,
  number,
  date,
  cvv,
  nameCustomer,
  numberPhone,
  address
) => {
  const metodoPago = {
    email,
    name,
    number,
    date,
    cvv,
    nameCustomer,
    numberPhone,
    address,
  };
  listaMetodosPago.push(metodoPago);
};

// Expresiones regulares para la validación de cada campo
const expresiones = {
  address: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion bajo
  name: /^[a-zA-ZÀ-ÿ\s]{4,16}$/, // Letras y espacios, pueden llevar acentos
  nameCustomer: /^[a-zA-ZÀ-ÿ\s]{4,16}$/, // Letras y espacios, pueden llevar acentos
  cvv: /^.{1,3}$/, // 3 dígitos
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  numberPhone: /^\d{7,14}$/, // 7 a 14 números
  number: /^\d{14,16}$/, // 14 a 16 números
  date: /^\d{4}-\d{2}$/, // Formato YYYY-MM-DD
};

// Obtener todos los inputs del formulario
const inputs = document.querySelectorAll("#usuarioForm input");

// Función para validar cada campo del formulario
const validarCampos = (e) => {
  const input = e.target;
  const campo = input.name;

  // Validar el campo según la expresión regular correspondiente
  if (expresiones[campo].test(input.value)) {
    relleno[campo] = true;
  } else {
    relleno[campo] = false;
    alert("Error de relleno");
  }
};

// Objeto para almacenar el estado de llenado de cada campo
const relleno = {
  email: false,
  name: false,
  number: false,
  date: false,
  cvv: false,
  nameCustomer: false,
  numberPhone: false,
  address: false,
};

// Agregar eventos de 'keyup' y 'blur' a cada input para validar su contenido
inputs.forEach((input) => {
  input.addEventListener("keyup", validarCampos);
  input.addEventListener("blur", validarCampos);
});
