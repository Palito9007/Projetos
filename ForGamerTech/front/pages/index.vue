<template>
  <section class="container">
    <head>
      <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    </head>
    <div>
      <h1 class="title animated bounceInDown">  ForGamerTech
      </h1>
      <br>
      <br>
      <h2 class="subtitle animated fadeInUp">
        O melhor site de compra e venda de peças em segunda mão!
      </h2>
      <div class="links">
        <a href="/home" target="_blank" class="button--green animated fadeInUp">Home</a>
        <a href="/login" target="_blank" class="button--grey animated fadeInUp">Login</a>
        <a href="/login" target="_blank" class="button--grey animated fadeInUp">Store</a>
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
  color: -webkit-linear-gradient(aqua, #333);
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  color: -webkit-linear-gradient (92deg, rgb(243, 86, 38), rgb(254, 171, 58));
  -webkit-text-fill-color: solid;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px; 

}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
