function listar(){
    var contenedor;
    contenedor = document.getElementById("contenido");
    fetch("read.php")
        .then((response) => response.text())
        .then((data) => {
            objeto = JSON.parse(data);
            contenedor.innerHTML = renderizarTablaRead(objeto);
        })
}
function renderizarTablaRead(objeto){
    let lista = objeto.datos;
    let html ="";

    for( var i=0; i<lista.length; i++){
        html +=`<tr>
            <td>${lista[i].nombres}</td>
            <td>${lista[i].apellidos}</td>
            <td>${lista[i].fecha_nacimiento}</td>
            <td>${lista[i].sexo}</td>
            <td>${lista[i].correo}</td>
            <td><a href="javascript:editar('${lista[i].id}')">Editar</a>
            <a href="javascript:eliminar('${lista[i].id}')">Eliminar</a></td>
        </tr>`;
    }
    return `<table border="1">
        <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Fecha Nac.</th>
            <th>Sexo</th>
            <th>Correo</th>
            <th>Operaciones</th>
        </tr>
        ${html}
    </table>`
}