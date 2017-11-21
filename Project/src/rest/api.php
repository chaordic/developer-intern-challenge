<?php
// get the HTTP method, path and body of the request
// ADAPTADO DE https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/
$method = $_SERVER['REQUEST_METHOD'];
$input = explode('/rest/api.php/', $_SERVER['REQUEST_URI']);

//Checa input
if (sizeof($input) == '1' or $input[1] == ''){
  echo "Insira um url";
  die();
}
//Trata Url
$url = $input[1];
$url = str_replace("www.", "", "$url");

if (!contain($url, 'http://') && !contain($url, 'https://'))  {
    global $url;
    $url = 'http://www.'.$url;
}
//Verifica se url está disponivel
$headers = @get_headers($url);
if (sizeof($headers)<'2'){
  echo "URL Inválido";
  die();
}

function contain($string,$substring){
 $cont = '0';
    if (strpos($string,$substring) !== false){
     $cont = true;
    }
 return $cont;
}


// connect to the mysql database
$db = parse_ini_file("config.ini");
$link = mysqli_connect($db['host'], $db['user'], $db['pass'], $db['name']);
mysqli_set_charset($link,'utf8');

// create SQL based on HTTP method

function queryarray($link, $array) {
 for ($x=0; $x < sizeof($array) ; $x++) {
   $result = mysqli_query($link, $array[$x]);
   if (!$result) {
       echo "DB error";
       die(mysqli_error($link));
   }
 }
}

function duplicated($link, $url){
  $sql = "select id from url where url = '$url'";
  $exists =  mysqli_fetch_array(mysqli_query($link,$sql));
  if(is_numeric($exists[0])) {
    return True;
  }
}

function post($link, $url) {
    $c_size = mysqli_num_rows(mysqli_query($link,"select * FROM `url`")) + 1;
    global $shorturl;
    $shorturl = hash('adler32', $url);
    $posturl = "insert into url (id, url) values ('$c_size', '$url')";
    $postsurl = "insert into shortUrl (id, shortUrl) values ('$c_size', '$shorturl')";
    $posthits = "insert into hits (id, hits) values ('$c_size', '0')";
    $queries = array("$posturl", "$postsurl", "$posthits");
    queryarray($link, $queries);
  }
switch ($method)
{
  case 'POST':
  if (duplicated($link, $url)){
    $shorturl = hash('adler32', $url);
  }
  else {
    post($link, $url);
  }
}

// print results, insert id or affected row count
if ($method == 'POST') {
  echo 'http://'.$_SERVER['HTTP_HOST']."/".$shorturl;
}
// close mysql connection
mysqli_close($link);

?>
