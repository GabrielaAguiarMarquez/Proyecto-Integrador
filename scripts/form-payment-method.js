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
        cvv: formData.get('cvv'),
        nameCustomer: formData.get('nameCustomer'),
        numberPhone: formData.get('numberPhone'),
        address:formData.get('address')

    };

    formulario.reset();
    agregarMetodo(json.email, json.name, json.number, json.date, json.cvv, json.nameCustomer, json.numberPhone, json.address);
    console.log('Método de pago: ', listaMetodosPago);
}


// Funcion para almacenar a los metodos
const agregarMetodo = (email, name, number, date, cvv, nameCustomer, numberPhone, address) => {
  const metodoPago = {
    email,
    name,
    number,
    date,
    cvv,
    nameCustomer,
    numberPhone,
    address
  }
  listaMetodosPago.push(metodoPago);
}
