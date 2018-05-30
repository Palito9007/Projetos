<template>
  <section class="container">
    <head>
      <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    </head>
    <div>
      <h1 class="title">ForGamerTech</h1>
      <br>
     
      <br>
      <h2 class="subtitle animated fadeInUp">
        O melhor site de compra e venda de peças em segunda mão!
      </h2>
      <div class="links">
        <a href="/home" class="button--green animated fadeInUp">Home</a>
        <a href="/login" class="button--grey animated fadeInUp">Login</a>
        <a href="/loja"  class="button--grey animated fadeInUp">Loja</a>
      </div>
    </div>
  </section>
</template>

<style scoped>

.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{ 
  font-family: consolas;
  display: block;
  font-weight: 300;
  font-size: 100px; 

}
.subtitle
{
  font-weight: 300;
  font-family: consolas;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}

h1 {  
  color:#313131;
  font-weight: bold;
  -webkit-animation: colorchange 20s infinite alternate;
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