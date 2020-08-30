const inputName = document.getElementById("inputName")
const inputApellido = document.getElementById("inputApellido")
const inputPassword = document.getElementById("inputPassword")
const inputEmail = document.getElementById("inputEmail")
const inputCelular = document.getElementById("inputCelular")
const nombreMensaje = document.getElementById("nombreMensaje")
const nombreApellido = document.getElementById("nombreApellido")
const nombrePassword = document.getElementById("nombrePassword")
const nombreCorreo = document.getElementById("nombreCorreo")
const nombreCelular = document.getElementById("nombreCelular")
console.log(inputName)
console.log(nombreMensaje)

function validarFormulario(event) {
    event.preventDefault()
   if (inputName.value == "") {
    swal("Error!", "Por favor llene todos los campos!", "error");
       inputName.classList.add('alert');
       nombreMensaje.innerText = 'Llene este campo del nombre por favor'
       inputName.placeholder = 'Su nombre aqui'
   }
   if (inputApellido.value == "") {
    swal("Error!", "Por favor llene todos los campos!", "error");
       inputApellido.classList.add('alert');
       nombreApellido.innerText = 'Llene este campo del apellido por favor'
       inputApellido.placeholder = 'Su apellido aqui'
   }
   if (inputPassword.value == "") {
    swal("Error!", "Por favor llene todos los campos!", "error");
       inputPassword.classList.add('alert');
       nombrePassword.innerText = 'Llene este campo del password por favor'
       inputPassword.placeholder = 'Su password aqui'
   }
   if (inputEmail.value == "") {
    swal("Error!", "Por favor llene todos los campos!", "error");
       inputEmail.classList.add('alert');
       nombreCorreo.innerText = 'Llene este campo del correo por favor'
       inputEmail.placeholder = 'Su correo aqui'
   }  
   if (inputCelular.value == "") {
    swal("Error!", "Por favor llene todos los campos!", "error");
       inputCelular.classList.add('alert');
       nombreCelular.innerText = 'Llene este campo del celular por favor'
       inputCelular.placeholder = 'Su celular aqui'
   }
   if (inputCelular.value !== ""){
    swal("Buen Trabajo!", "Bienvenido a la calculadora", "success");
    setTimeout (()=>{
        window.location ="./calculadora.html"
    }, 4000)
   }
   
}

/* Calculadora*/

const promedio= document.getElementById("promedio"); // Llamamos el boton
const suma= document.getElementById("suma"); // Llamamos el boton
const resta= document.getElementById("resta"); // Llamamos el boton
const division= document.getElementById("division"); // Llamamos el boton

promedio.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value); //Me trae y almacena el valor del input
    let num2= parseFloat(document.getElementById("num2").value); //Me trae y almacena el valor del input
    let num3= parseFloat(document.getElementById("num3").value); //Me trae y almacena el valor del input
    let respuesta=  document.getElementById("respuesta");
    let resultado= (num1 + num2 + num3)/3;
    respuesta.innerHTML= "<i>" + resultado + "</i>";

})
suma.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value); //Me trae y almacena el valor del input
    let num2= parseFloat(document.getElementById("num2").value); //Me trae y almacena el valor del input
    let num3= parseFloat(document.getElementById("num3").value); //Me trae y almacena el valor del input
    let respuesta=  document.getElementById("respuesta");
    let resultado= (num1 + num2 + num3);
    respuesta.innerHTML= "<i>" + resultado + "</i>";

})
resta.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value); //Me trae y almacena el valor del input
    let num2= parseFloat(document.getElementById("num2").value); //Me trae y almacena el valor del input
    let num3= parseFloat(document.getElementById("num3").value); //Me trae y almacena el valor del input
    let respuesta=  document.getElementById("respuesta");
    let resultado= (num1 + num2 + num3)/3;
    respuesta.innerHTML= "<i>" + resultado + "</i>";

})
division.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value); //Me trae y almacena el valor del input
    let num2= parseFloat(document.getElementById("num2").value); //Me trae y almacena el valor del input
    let num3= parseFloat(document.getElementById("num3").value); //Me trae y almacena el valor del input
    let respuesta=  document.getElementById("respuesta");
    let resultado= (num1 + num2 + num3)/3;
    respuesta.innerHTML= "<i>" + resultado + "</i>";

})
