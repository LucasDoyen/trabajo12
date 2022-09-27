

let sexo = document.querySelector("#sexo");
let peso = document.querySelector("#peso");
let btn = window.document.getElementById("boton")
let pesoElegido = 0
let sexoElegido = ""


const suma = function (sexo,peso) {
    pesoElegido = peso.value
    sexoElegido = sexo.value 

      if  ((sexoElegido === "femenino") && (pesoElegido <= 60))
      {alert("estas joya!");
   }
      else if ((sexoElegido === "masculino") && (pesoElegido <=80))
      {alert("estas joya!");
   }
      else {alert("Estas excedido de peso");
   }
}
    
btn.addEventListener("click", function (){suma(sexo,peso) } );


 
