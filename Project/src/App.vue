<template>
  <div>
    <header id="headlogo">
      <img src="/src/assets/logo-chaordic.png"></img>
    </header>
    <body>
      <div id="bg">
        <div id="title">{{title}}</div>
        <div id="subtitle">{{subtitle}}<br />{{breaksubtitle}}</div>
        <div id="wrapper">
          <div id="response"></div>
          <input id="urlinput" placeholder="Cole o seu link aqui">
          <button id="button" v-on:click="sendurl">ENCURTAR</button>
          <button id="close_button" v-on:click="newurl">x</button>
          <div id="line"></div>
        </div>
      </div>
      <div id="top5">
        <h1>TOP 5</h1>
        <ul id="toplist">
          <li class="divider"></li>
          <li class="item"></li>
          <li class="hits"></li>
          <li class="divider"></li>
          <li class="item"></li>
          <li class="hits"></li>
          <li class="divider"></li>
          <li class="item"></li>
          <li class="hits"></li>
          <li class="divider"></li>
          <li class="item"></li>
          <li class="hits"></li>
          <li class="divider"></li>
          <li class="item"></li>
          <li class="hits"></li>
        </ul>
      </div>
      <div id="totalhits">
        <div id="square"></div>
        <h1>HITS</h1>
        <div id="hitsnum"></div>
        <h2>Cliques em links</h2>
        <footer>
          <h3>chr.dc</h3>
          <div id="fb"><img src="src/assets/icon-facebook.png"><a href="http://facebook.com/?"</a></img></div>
          <div id="twitter"><img src="src/assets/icon-twitter.png"><a href="http://twitter.com/?"</a></img></div>
        </footer>
      </div>
    </body>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      title: 'Encurte seus links.',
      subtitle: 'Links são longos. Encurte os links que você deseja compartilhar,',
      breaksubtitle: 'e acompanhe enquanto viajam através da internet.',
    }
  },
  methods: {
    sendurl: function(){
      var xhttp = new XMLHttpRequest();
      var urlinput = (document.getElementById("urlinput").value);
      xhttp.open("POST", "http://localhost/rest/api.php/"+urlinput , true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.responseType="text";
      xhttp.send();
      xhttp.addEventListener('readystatechange', function(){
        window.shorturl = xhttp.responseText;
        changeurl.cgh();
      });
    },
    newurl: function(){
    document.getElementById("response").style.opacity = '0';
    document.getElementById("urlinput").style.opacity = '1';
    document.getElementById("urlinput").style.visibility = 'visible';
    }
  }
}

var changeurl = new Vue ({
  methods: {
    cgh: function(){
    document.getElementById("response").innerHTML = "<a href='"+shorturl+"'>"+shorturl+"</a>";
    document.getElementById("response").style.opacity = '1';
    document.getElementById("urlinput").style.opacity = '0';
    document.getElementById("urlinput").style.visibility = 'hidden';
    document.getElementById("close_button").style.visibility = 'visible';
    }
  }
})

var totalhits = new Vue ({
  created: function() {
        this.showdata();
  },
  methods: {
    getdata: function(url) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("get", url, true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.responseType="text";
      xhttp.send();
      xhttp.addEventListener('readystatechange', function(){
        var thits = xhttp.responseText;
        window.thits = thits;
        document.getElementById('hitsnum').innerHTML = window.thits;
      });
    },
    showdata: function(){
      window.setInterval(function(){
        totalhits.getdata("http://localhost/totalhits.php");
      }, 2000);
    }
  }
})

var top5 = new Vue ({
  created: function () {
    window.setInterval(function(){
        top5.getdata("http://localhost/top5.php");
    }, 2000);
  },
  methods: {
    getdata: function(url) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("get", url, true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.responseType="text";
      xhttp.send();
      xhttp.addEventListener('readystatechange', function(){
        var json = xhttp.responseText;
        window.toparray = JSON.parse(json);
        top5.showdata();
      });
    },
    showdata: function(){
      if (window.toparray.length) {
        for (var i = 0; i < 5; i++) {
          document.getElementsByClassName('item')[i].innerHTML = '<a href=http://localhost/'+toparray[i+5]+'>'+toparray[i]+'</a>';
          document.getElementsByClassName('hits')[i].innerHTML = toparray[i+10];
        }
      }
    }
  }
})
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab');
footer {
  padding-top: 10px;
  position: absolute;
  margin: auto;
  width: 100%;
}
h3 {
  font-size: 26px;
  float: left;
  position: relative;
  margin-left: 80px;
  margin-top: 80px;
}
#fb {
  right: 0;
  position: absolute;
  margin-right: 120px;
  margin-top: 80px;
}
#twitter {
  right: 0;
  position: absolute;
  margin-right: 80px;
  margin-top: 80px;
}
#totalhits {
  width: 100%;
  background-color: #EEEEEE;
  margin-top: 7vmin;
  position: absolute;
  color: #AA1423;
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  text-align: center;
  padding-bottom: 6vmin;

}
#square {
  width: 90px;
  height: 90px;
  transform: rotate(45deg);
  background-color: #ffffff;
  margin: auto;
  margin-top: -48px;
}
#hitsnum {
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #ABABAB;
  width: 22vmin;
  height: 45px;
  line-height: 45px;
  vertical-align: middle;
}
#top5 {
  margin: 0 auto;
  width: 75vmin;
}
#toplist {
  list-style-type: none;
  padding: 0;
}
h1 {
  margin-top: 30px;
  margin-bottom: 20px;
  color: #AA1423;
  text-align: center;
  font-family: 'Roboto Slab', serif;
  font-size: 45px;
}
h2 {
  color:  #ABABAB;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}
.item {
  color: #AA1423;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space:nowrap;
  width: 90%;
}
.hits {
  color: #ABABAB;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  display: inline-flex;
  float: right;
}
.divider {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 1px;
  background: #ABABAB;
  text-align:center;
  overflow: hidden;
}
#close_button {
  width:10px;
  visibility:hidden;
  position:relative;
  length: 10px;
  background-color:rgba(0, 0, 0, 0);
  float: left;
  margin-left: 75%;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  z-index:2;
}
a {
  color: inherit;
  text-decoration: inherit;
}
#response {
  transition: opacity 1s linear 1s;
  opacity: 0;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  position:absolute;
  left: 9px;
  width: 75%;
}
#urlinput {
  transition: visibility 0s linear 1s, opacity 1s linear;
  visibility: visible;
  color: #ff6e14;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  background-color:rgba(0, 0, 0, 0);
  position:absolute;
  left: 9px;
  width: 75%;
  z-index: 0;
}
input,button,close_button:focus {
    border: 0 none;
    outline: 0;
}
#wrapper {
  width: 75vmin;
  height: 60px;
  position: relative;
  margin: 0 auto;
  margin-top: 4%;
  margin-bottom: 15%;
  overflow: auto;
}
#button {
  position:relative;
  background-color: #ff6e14;
  border-style: solid;
  border-width: 6px;
  border-color: #ff6e14;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  float: right;
  z-index: 1;
}
#line {
  position:absolute;
  left: 9px;
  margin-top: 34px;
  padding-top: 2px;
  width:58vmin;
  background: #ff6e14;
}
#title {
  text-align: center;
  font-family: 'Roboto Slab', serif;
  font-size: 45px;
  padding-top: 25vmin;
  color: #FFFFFF;
}
#subtitle {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  padding-top: 1vh;
  color: #FFFFFF;
}
#headlogo {
  padding-top: 9px;
  height: 16px;
  color: #FFFFFF;
  text-align: center;
  z-index: 0;
}
#bg {
  background: url("/src/assets/background-home.jpg");
  background-position: center 20px;
  background-size: 150vmin auto;
  background-attachment: scroll;
  background-repeat: no-repeat;
  overflow:auto;
}
body {
  margin: 0;
}
@media screen and (max-width: 650px) {
  #close_button {
    float: left;
    margin-left: 50vw;
  }
  #square {
    width: 60px !important;
    height: 60px !important;
    margin-top: -35px !important;
  }
  h1 {
    font-size:25px;
  }
  .item {
    font-size: 15px !important;
  }
  .hits {
    font-size: 15px !important;
  }
  #response {
    font-size: 12px;
  }
  #button {
    border-width: 4px !important;
    font-size: 12px;
  }
  #line {
    margin-top:22px;
    width: 55vmin;
  }
  input {
    font-size: 12px !important;
    width: 70% !important;
  }
  #title {
    font-size: 25px !important;
    padding-top: 15vh !important;
  }
  #subtitle {
    font-size: 15px !important;
  }
  #bg {
    background-size: auto 40vh !important;
  }
}
</style>
