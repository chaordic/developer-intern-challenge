<?php

require_once 'db.php';

$mysql_result = mysqli_query($conecta, 'SELECT shortUrl ,hits
    FROM tabela1
ORDER BY hits DESC
   LIMIT 5');

echo "<table>";
for($i = 0 ; $i < 5 ; $i++){ 
    $qtdhit = mysqli_fetch_array($mysql_result);
    echo "<tr><td width='11' class='lc' id='top1url'><a href='".$qtdhit[0]."' style='color:inherit;
  text-decoration: none;'>".$qtdhit[0]."</a> </td><td class='qh' id='top1hits'>".$qtdhit[1]."</td></tr>";
}
echo "</table>";

?>