
<html>

	<head>
	
		<meta charset="utf-8">
		
		<title>Encurte seu link</title>
		
		<link rel="shortcut icon" href="figures/logo-site.png">
		
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" >
			
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab" >
		
		<link rel="stylesheet" href="css/layout.css">
        
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js"></script>
        <script type="text/javascript">
            $(function()
            {
                $("#ajaxShorten").click(function() {

                    //$(this).hide();
                    $("#error").hide();

                    $.post('ajax.php', {url : $("#longURL").val()}, function(data)
                    {
                        if(data.indexOf("http") == -1)
                        {
                            $("#error").show();
                            $("#error").html(data);
                        }else{
                            $("#longURL").val(data);
                        }
                        //$("#ajaxShorten").show();
                        
                    });
                });
            });
        </script>
		
	</head>

	<body>
		
		<?php include 'linkShortner.php';?>
	
		<header>
	  
		  <img src="figures/logo-chaordic.png">
		  
		</header>
		
		<div class="planodefundo">
		
			<h1>Encurte seus links.</h1>

	  		<p>Links são longos. Encurte os links que você deseja compartilhar,<br>e acompanhe enquanto viajam através da internet.</p>
	  		
	  		<input type="url" id="longURL" placeholder="Cole o seu link aqui">

			<button id="ajaxShorten">ENCURTAR</button>
				
	</div>
	
		<div id="tops">
		
			<h2>TOP 5</h2>
			<table>
                <?php require_once 'top5.php'; ?>
			</table>
			
		</div>
		
		<div id="mostrahits">
            
		  	<div class="vde"></div>
            
		  	<h2 id="th">HITS</h2>
            
		  	<h2 id="nhits"><?php include 'qtdehits.php';?></h2>
            
			<p id="tc">Cliques em links</p>
            
			<p>&nbsp;</p>
            
		</div>	

		
		<div id="footer">

			<div id="pagina">

				<a href="https://www.chaordic.com.br/">chr.dc</a>

			</div>

			<div id="redessociais">

				
                
                <a href='https://twitter.com/chaordic'><img src="figures/icon-twitter.png"></a>

				<a href='https://pt-br.facebook.com/chaordic.com.br/'><img src="figures/icon-facebook.png"></a>

			</div>
			
		</div>
        
        <div style="display: none;position:relative;margin:0 auto; background-color:#cc0000;color:white;padding:10px;width:500px;font-size:18px;" id="error"></div>
	</body>
</html>
