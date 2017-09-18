<?php 

require_once 'db.php';
//$link = mysqli_connect("localhost", "root", "1234", "encurtadordelinks");
$mysql_result = mysqli_query($conecta, 'SELECT SUM(hits) FROM tabela1');
$qtdhit = $mysql_result->fetch_array();

echo $qtdhit[0];

?>