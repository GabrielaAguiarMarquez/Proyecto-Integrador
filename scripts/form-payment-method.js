// Array metodos de pago
const listaMetodosPago = [];

// Recibir la info del formulario
const recibirForm = (evento) => {
    evento.preventDefault();
    const formulario = document.getElementById("usuarioForm");
    const formData = new FormData(formulario);

    const json = {
        email: formData.get('email'),
        name: formData.get('name'),
        number: formData.get('number'),
        date: formData.get('date'),
        cvv: formData.get('cvv')
    };

    formulario.reset();
    agregarMetodo(json.email, json.name, json.number, json.date, json.cvv);
    console.log('Método de pago: ', listaMetodosPago);
}


// Funcion para almacenar a los metodos
const agregarMetodo = (email, name, number, date, cvv) => {
  const metodoPago = {
    email,
    name,
    number,
    date,
    cvv
  }
  listaMetodosPago.push(metodoPago);
}