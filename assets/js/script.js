const inputName= document.getElementById("InputName")
const nombreMensaje=document.getElementById("nombreMensaje")
console.log(inputName)

function validarFormulario(event) {
    event.preventDefault()
   if (inputName.value == "") {
    swal("Good job!", "You clicked the button!", "error");
       inputName.classList.add("alert");
       nombreMensaje.innereText = "Llene este campo por favor"
       inputName.placeholder = "Pepito Perez"
   } 

   if (inputName.value !== ""){
    swal("Good job!", "You clicked the button!", "success");
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
