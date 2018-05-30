<template>

  <div class="container">
    <slots>
      <h2>{{Nome}}</h2>
      <h4>{{Preco + ' € '}}</h4>
      <h6>{{Visualizacoes}}</h6>
    </slots>
  </div>

</template>



<script>
import axios from 'axios';
import slots from '@/components/slots';



export default {
     components: {
     slots
  },
  props:{
    ID_componente:{
      type: String,
      required: false
    },
    Nome:{
      type: String,
      required: true
    },
    Preco: {
      type: Number,
      required: true
    },
    IDrequisicao:{
      type: Number,
      required: false,
    },
    vendido: {
      type: Number,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    imagem: {
      type: ImageData,
      required: true,
    },
    marca: {
      type: String,
      required: true
    },
    dataCompra: {
      type: String,
      required: false,
    },
    numFatura: {
      type: Number,
      required: false,
    },
    ID_categoria:{
      type: Number,
      required: true
    },
    Visualizacoes:{
      type: Number,
      required: true
    }




  }
}
</script>


<style scoped>

</style>
