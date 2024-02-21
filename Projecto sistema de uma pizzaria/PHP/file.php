<style>
table, td{
           border: 1px solid black;
        }
</style>   

<?php
$servername = "yuri";
$username = "root";
$password = "";
$dbname = "Pizzaria";

// criando conexão
$conn = new mysqli($servername, $username, $password, $dbname);
// verificando
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else {
echo "sucesso <br>";
}
//select em PHP com tabela mostrada

//select em PHP
/*$sql = "SELECT * FROM usuario WHERE idUsuario = '4' AND '1'" ;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["idUsuario"]. " - Name: " . $row["nome"]. " email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}
    $conn->close();
   
/*
$sql = "INSERT INTO usuario (idusuario, nome, email, pass)
VALUES (4,'Samuel','samuelbolacha@gmail.com', 'bolacha23')";
 
if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo "sucesso". $last_id;
   
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}*/

?>
