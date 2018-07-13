<?php
  $db = parse_ini_file("rest/config.ini");
  $link = mysqli_connect($db['host'], $db['user'], $db['pass'], $db['name']);
    mysqli_set_charset($link,'utf8');
    $totalhits = "SELECT SUM(hits) FROM hits";
    echo mysqli_fetch_array(mysqli_query($link,$totalhits))[0];
?>
