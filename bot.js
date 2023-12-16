// bot.js

const axios = require('axios');

// Datos del usuario para el registro
const userData = {
  username: 'nombre_de_usuario',
  email: 'correo@example.com',
  password: 'contraseña_segura',
};

// URL del formulario de registro en WordPress
const registerURL = 'https://lsma.es/Registrar/';

// Función para registrar un usuario en WordPress
function registerUser() {
  axios.post(registerURL, userData)
    .then(response => {
      console.log('Usuario registrado con éxito:', response.data);
    })
    .catch(error => {
      console.error('Error al registrar usuario:', error.response.data);
    });
}

// Llamada para registrar un usuario al ejecutar el bot
registerUser();
