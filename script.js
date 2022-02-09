document.getElementById("submit").addEventListener("submit", noEnviar);

function noEnviar(e){

    let inputs = document.querySelectorAll("input");
    let controller = true;

        inputs.forEach(element => {
            if(element.value==""){ //radiobutton falta
                console.log("Error, rellene el apartado " + element.id); 
                controller = false;
            } else {
    
                if (element.id=="nombre"){
                    let regExp = /^[a-zA-Z]{2,20}$/;
                    if(regExp.exec(element.value)==null){
                        console.log("Error, el nombre debe tener entre 2 y 20 letras");
                        controller = false;
                    }
                }

                if (element.id=="apellidos"){
                    let regExp = /^[a-zA-Z]{2,60}$/;
                    if(regExp.exec(element.value)==null){
                        console.log("Error, el nombre debe tener entre 2 y 60 letras");
                        controller = false;
                    }
                }
    
                if(element.id=="email"){
                    let regExp = /^[a-zA-Z0-9_]*@[a-zA-Z]*\.[a-zA-Z]{2,3}$/;
                    if(regExp.exec(element.value)==null){
                        console.log("Error, el correo no es valido");
                        controller = false;
                    }
                }
        
                if (element.id=="usuario"){
                    let regExp = /^([a-zA-Z]{5,10})+([0-9]{1,2})$/;
                    if(regExp.exec(element.value)==null){
                        console.log("Error, el usuario no es válido");
                        controller = false;
                    }
                }
                
                if (element.id=="contraseña"){
                    let regExp = /^[a-zA-Z0-9]{6,10}$/;
                    if(regExp.exec(element.value)==null){
                        console.log("Error, la contraseña no es válida");
                        controller = false;
                    }
                }
                
                if (element.id=="repetir_contraseña"){
                    let con = document.getElementById("contraseña").value;
                    if(element.value!= con){
                        console.log("Error, las contraseñas no coinciden");
                        controller = false;
                    }
                }
                
            }
        });
    if(controller!=true){
        e.preventDefault();
    }
}