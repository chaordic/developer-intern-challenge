<?php
require_once 'db.php';

function url_exist($url)
{
    $c=curl_init();
    curl_setopt($c,CURLOPT_URL,$url);
    curl_setopt($c,CURLOPT_HEADER,1);
    curl_setopt($c,CURLOPT_NOBODY,1);
    curl_setopt($c,CURLOPT_RETURNTRANSFER,1);
    if(!curl_exec($c)){
        return false;
    }else{
        return true;
    }
}

function shorteURLFromID ($integer)
{
    $base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$length = strlen($base);
	while($integer > $length - 1)
	{
		$out = $base[fmod($integer, $length)] . $out;
		$integer = floor( $integer / $length );
	}
	return $base[$integer] . $out;
}

if(isset($_POST['url']))
{
	$url = trim(strip_tags($_POST['url']));
	$url = str_replace(array("http://", "http://www.", "www."), array('', '', ''), $url);
	if(strlen($url) < 3) die("URL Please");
	if(url_exist($url))
	{
		//check if exists
		$rs = mysqli_query($conecta,"SELECT idString FROM tabela1 WHERE url = '".mysqli_real_escape_string($conecta,$url)."'");
        
		if(@mysqli_num_rows($rs)) {
			$row=@mysqli_fetch_object($rs);
			$string = $row->string;
			print "http://".$_SERVER['chr.dc']."/".$string;
		}else{
			$rs = mysqli_query($conecta,"INSERT INTO tabela1 (url, shortUrl) VALUES 
			('".mysqli_real_escape_string($conecta,$url)."', '0')"); 
			if($rs) {
				$string = shorteURLFromID(mysqli_insert_id($conecta));
				$rs = mysqli_query($conecta,"UPDATE tabela1 SET shortUrl = http://chr.dc/'$string' WHERE id = '".mysqli_insert_id($conecta)."'");
				print "http://".$_SERVER['chr.dc']."/".$string;
			}else{
				print "Could not create shortened link".mysqli_error($conecta);
			}
		}
	 	
	}else{
		print "Bad URL!";
	}
}else{
	print 'URL Not Received<br/>';
}

?>