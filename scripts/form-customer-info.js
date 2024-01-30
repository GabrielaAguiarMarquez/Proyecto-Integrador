// Array de nuestros usuarios
const ListaUsuarios = [
    {
        name: 'amaya dunne',
        number: 732-123-4567,
        address: '4706 street, bayville, new jersey(nj)'
    }
];



// Recibir la info del formulario
const recibirForm = (evento) => {
    evento.preventDefault();
    // Id del formulario
    const formulario = document.getElementById("usuarioForm");
    const formData = new FormData(formulario);

    const json = {};

    for (const [key, value] of formData.entries()) {
        json[key] = value;
    }
    formulario.reset()
    agregarUsuario(json.name, json.number, json.address);
    console.log('Lista de usuarios: ', ListaUsuarios)
}

// Funcion para almacenar a los usuarios
const agregarUsuario = (name, number, address) => {
  const usuario = {
    name,
    number,
    address
  }
  ListaUsuarios.push(usuario);
}