const inputName = document.getElementById("inputName")
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
       inputName.placeholder = 'Pepito Perez'
   }
   if (inputName.value == "") {
    swal("Error!", "Por favor llene todos los campos!", "error");
       inputName.classList.add('alert');
       nombreApellido.innerText = 'Llene este campo del apellido por favor'
       inputName.placeholder = 'Pepito Perez'
   }
   if (inputName.value == "") {
    swal("Error!", "Por favor llene todos los campos!", "error");
       inputName.classList.add('alert');
       nombrePassword.innerText = 'Llene este campo del password por favor'
       inputName.placeholder = 'Pepito Perez'
   }
   if (inputName.value == "") {
    swal("Error!", "Por favor llene todos los campos!", "error");
       inputName.classList.add('alert');
       nombreCorreo.innerText = 'Llene este campo del correo por favor'
       inputName.placeholder = 'Pepito Perez'
   }  
   if (inputName.value == "") {
    swal("Error!", "Por favor llene todos los campos!", "error");
       inputName.classList.add('alert');
       nombreCelular.innerText = 'Llene este campo del celular por favor'
       inputName.placeholder = 'Pepito Perez'
   }
   if (inputName.value !== ""){
    swal("Buen Trabajo!", "Bienvenido a la calculadora", "success");
    setTimeout (()=>{
        window.location ="./calculadora.html"
    }, 4000)
   }
   
}

/* Calculadora*/

const promedio= document.getElementById("promedio"); // Llamamos el boton

promedio.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value); //Me trae y almacena el valor del input
    let num2= parseFloat(document.getElementById("num2").value); //Me trae y almacena el valor del input
    let num3= parseFloat(document.getElementById("num3").value); //Me trae y almacena el valor del input
    let respuesta=  document.getElementById("respuesta");
    let resultado= (num1 + num2 + num3)/3;
    respuesta.innerHTML= "<i>" + resultado + "</i>";

})
