function cargarContenido(abrir){
    var contenedor;
    contenedor = document.getElementById('contenido');
    fetch(abrir)
        .then(Response => Response.text())
        .then(data => contenedor.innerHTML=data);
}

function crear(){
   var datos = new FormData(document.querySelector('#form-insertar'));
    fetch("create.php",{method:"POST", body: datos})
        .then(Response => Response.text())
        .then((data)=>{
            document.querySelector('#contenido').innerHTML = data;
            listar();//para regargar la lista despues de insertar
        });
}
