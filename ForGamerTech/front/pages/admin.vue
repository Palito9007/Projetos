<template>
   <body class="container">
     <form @submit.prevent='submit'>
           <button type="submit">POST</button>  <button type="update">UPDATE</button> <h1 class="text-center">Menu de Inserção/Update de produtos (POST/UPDATE) </h1>
       <div class="row">
         <div class="col">
                     <input type="text" name="" id="" v-model="novoProduto.ID_componente" placeholder="ID_componente">
           </div>
           <div class="col">
                     <input type="text" name="" id="" v-model="novoProduto.nome" placeholder="Nome">
           </div>
           <div class="col">
                     <input type="text" name="" id=""  v-model="novoProduto.preco" placeholder="Preco">
           </div>
           <div class="col">
                     <input type="text" name="" id="" v-model="novoProduto.imagem" placeholder="Imagem">
           </div>
            <div class="col">
                     <input type="text" name="" id="" v-model="novoProduto.descricao" placeholder="Descricao">
           </div>
            <br> <br> <br>
           <div class="col text-center">
                     <input type="text" name="" id="" v-model="novoProduto.marca" placeholder="Marca">
           </div>
           <div class="col text-center">
                     <input type="text" name="" id="" v-model="novoProduto.ID_categoria" placeholder="IDCategoria">
           </div>
           <div class="col text-center">
                     <input type="text" name="" id="" v-model="novoProduto.Visualizacoes" placeholder="Visualizacoes">
           </div>
       </div> <br> <br> <br>
      <div>
        <h1 class="text-center"><button type="delete">DELETE</button></h1>
            <div class="text-center">
                     <input type="text" name="" id="" placeholder="ID A ELIMINAR !!!">
                     
           </div>
      </div>
     </form>
   </body>
</template>

<script>
import axios from 'axios';
//O navbar / menu esta nos layouts
export default {
  layout: "sidenav",
    data(){
      return{
        novoProduto:{
          nome: "",
          preco: "",
          imagem: "",
          descicao: "",
          marca: "",
          ID_categoria: "",
          visualizacoes: "",
        }
      }
    },
    methods:{
       submit(){ axios.post("http://localhost:8081/submit" , this.novoProduto)
        .then(function(response) {
          console.log(response);
          
        })
        }, 
        delete(){ axios.delete("http://localhost:8081/submit/del")
        .then(function(response){
          console.log(response);
        })}
        },
        update(){ axios.post("http://localhost:8081/submit/upd")
        .then(function(response){
          console.log(response);
        })}
 }
</script>

<style scoped>
body {
  background-color: lightgray;
}
</style>
