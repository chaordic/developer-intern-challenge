<?php 
require_once 'db.php';

$jsonCont = file_get_contents('urls.json'); 
$content = json_decode($jsonCont, true);

 
foreach($content as $key) {
    $id = (int) $key['id'];
    $hits = $key['hits'];
    $url = $key['url'];
    $sortUrl = $key['shortUrl'];
    $query = "INSERT INTO tabela1(id, hits, url, shortUrl) VALUES('$id', '$hits', '$url', '$sortUrl')"; 
    mysqli_query($conecta,$query);// or print (mysqli_error($conecta));

}


?>
