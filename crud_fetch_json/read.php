<?php include("conexion.php");

$sql="SELECT id,nombres,apellidos,fecha_nacimiento,sexo,correo FROM personas";
$resultado=$con->query($sql);


$arreglo = [];
while($row=mysqli_fetch_array($resultado)){
    $arreglo[] = ["id" => $row['id'],
          "nombres" => $row['nombres'],
        "apellidos"=>$row["apellidos"],
        "fecha_nacimiento"=>$row["fecha_nacimiento"],
        "sexo"=>$row["sexo"],
        "correo"=>$row["correo"],
    ];
}

$nuevoarreglo = [
    "datos"=>$arreglo
];

echo json_encode( $nuevoarreglo );
?>