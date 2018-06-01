<template>
   <body class="container">
     <form @submit.prevent='submit'>
           <button type="submit">POST</button>  <button type="update">UPDATE</button> <h1 class="text-center">Menu de Inserção/Update de produtos (POST/UPDATE) </h1>
       <div class="row">
         <div class="col">
                     <input type="number" name="" id="" v-model="novoProduto.IDcomponente" placeholder="ID_componente">
           </div>
           <div class="col">
                     <input type="text" name="" id="" v-model="novoProduto.nome" placeholder="Nome">
           </div>
           <div class="col">
                     <input type="number" name="" id=""  v-model="novoProduto.preco" placeholder="Preco">
           </div>
           <div class="col"> 
                     <input type="number" name="" id=""  v-model="novoProduto.IDrequisicao" placeholder="Requisicao">
           </div> 
           <div class="col">
                     <input type="number" name="" id=""  v-model="novoProduto.IDcomprador" placeholder="Comprador">
           </div>
            <div class="col">
                     <input type="number" name="" id=""  v-model="novoProduto.vendido" placeholder="1/0 Vendido">
             </div>
            <div class="col">
                     <input type="text" name="" id="" v-model="novoProduto.descricao" placeholder="Descricao">
            </div>
           <div class="col ">
                     <input type="text" name="" id="" v-model="novoProduto.imagem" placeholder="Imagem">
           </div>
            <br> <br> <br>
           <div class="col ">
                     <input type="text" name="" id="" v-model="novoProduto.marca" placeholder="Marca">
           </div> 
            <div class="col ">
                     <input type="date" name="" id=""  v-model="novoProduto.dataCompra" placeholder="Data Compra">
           </div>
            <div class="col text-center">
                     <input type="number" name="" id=""  v-model="novoProduto.numFatura" placeholder="Numero de Fatura">
           </div>
           <div class="col text-center">
                     <input type="number" name="" id="" v-model="novoProduto.IDcategoria" placeholder="IDCategoria">
           </div>
           <div class="col text-center">
                     <input type="number" name="" id="" v-model="novoProduto.Visualizacoes" placeholder="Visualizacoes">
           </div>
          </div>
          <br> <br> <br>
      <div>  
      </div>
      </form>
      <form @submit.prevent='del'>
        <h1 class="text-center"><button type="del">DELETE</button></h1>
            <div class="text-center">
                     <input type="number" name="" id="" v-model="delProd.del" placeholder="ID A ELIMINAR !!!">
                     
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
          IDcomponente:null,
          nome: null,
          preco: null,
          IDrequisicao: null,
          IDcomprador: null,
          vendido: null,
          imagem:null,
          descicao: null,
          marca: null,
          IDcategoria: null,
          Visualizacoes: null,

        },
        delProd:{
          del: null
        }
      }
    },
    methods:{
       submit(){ axios.post("http://localhost:8081/submit" , this.novoProduto)
        .then(function(response) {
          console.log(response);
          
        })
        }, 
        del(){ axios.delete("http://localhost:8081/del")
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
