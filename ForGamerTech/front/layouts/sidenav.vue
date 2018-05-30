<template>
<nav>
 <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="/contatos">Contatos</a>
  <a href="/loja">Loja</a>
  <button class="dropdown-btn">Categorias 
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
    <a href="#">CPU</a>
    <a href="#">Gráfica</a>
    <a href="#">Coller</a>
  </div>
  <a href="/perfil/:id">Perfil</a>
  <a  href="/admin">Modo administrador</a>
</div>

<body id="main" class="row">
  <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; Menu</span>
  
  <div class="container"> <h1 class="forgamertech">ForGamerTech</h1> </div>


</body>




<script>
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.html.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.html.style.backgroundColor = "white";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
</script>
<nuxt/>
</nav>
</template>


<script>
export default {
    layout: 'sidenav'
}
</script>

<style>
body {
    font-family: "Lato", sans-serif;
    transition: background-color .5s;
}
.closebtn{
    
}
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a, .dropdown-btn {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
    
}

.sidenav a:hover, .dropdown-btn:hover {
    color: #f1f1f1;
}


.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
.active {
    background-color: grey;
    color: white;
}
.dropdown-container {
    display: none;
    background-color: #262626;
    padding-left: 8px;
}

#main {
    transition: margin-left .5s;
    padding: 16px;
}
.fa-caret-down {
    float: right;
    padding-right: 8px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
.forgamertech
{
  
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: Block;
  font-weight: 300;
  font-size: 90px;
  color: #35495e;
  text-align: center;
  letter-spacing: 1px;
  padding-right: 25px;
  
}

h1 {  
  color:#313131;
  font-weight: bold;
  position: relative;
  -webkit-animation:colorchange 20s infinite alternate;
}

@-webkit-keyframes colorchange {
  0% {
    color: blue;
  }

  10% {
    color: #8e44ad;
  }

  20% {
    color: #1abc9c;
  }

  30% {
    color: #d35400;
  }

  40% {
    color: blue;
  }

  50% {
    color: #34495e;
  }

  60% {
    color: blue;
  }

  70% {
    color: #2980b9;
  }
  80% {
    color: #f1c40f;
  }

  90% {
    color: #2980b9;
  }

  100% {
    color: pink;
  }
}

</style>