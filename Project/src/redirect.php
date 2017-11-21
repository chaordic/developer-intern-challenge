<?php
    $shortUrl =  explode('/', $_SERVER['REQUEST_URI'])[1];
    $db = parse_ini_file("rest/config.ini");
    $link = mysqli_connect($db['host'], $db['user'], $db['pass'], $db['name']);
    mysqli_set_charset($link,'utf8');

    $findid = "select id from shortUrl where shortUrl = '$shortUrl'";
    $id = mysqli_fetch_array(mysqli_query($link,$findid))[0];

    if (!$id) {
        echo "DB error - entry not found";
        die(mysqli_error($link));
    }


    $findurl = "select url from url where id = '$id'";
    $url = mysqli_fetch_array(mysqli_query($link,$findurl))[0];

    $findhits = "update hits set hits = hits + 1 where id ='$id'";
    $hits = mysqli_query($link,$findhits);

    function Redirect($url, $permanent = false) {
      header('Location: ' . $url, true, $permanent ? 301 : 302);
      exit();
    }

redirect($url);
?>
