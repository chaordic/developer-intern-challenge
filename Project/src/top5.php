<?php
  $db = parse_ini_file("rest/config.ini");
  $link = mysqli_connect($db['host'], $db['user'], $db['pass'], $db['name']);
    mysqli_set_charset($link,'utf8');
    $top5 = "SELECT * FROM `hits` ORDER BY `hits` DESC LIMIT 5";
    $t = mysqli_query($link,$top5);
    while($row = mysqli_fetch_array($t)) {
      $id[] = $row['id'];
      $hits[] = $row['hits'];
    }
    for ($x=0; $x < 5; $x++) {
      $findurl = "select url from url where id = '$id[$x]'";
      $url[$x] = mysqli_fetch_array(mysqli_query($link,$findurl))[0];
      $findsurl = "select shorturl from shorturl where id = '$id[$x]'";
      $surl[$x] = mysqli_fetch_array(mysqli_query($link,$findsurl))[0];
    }
    $top5 = array_merge($url,$surl,$hits);
    echo json_encode($top5);

?>
