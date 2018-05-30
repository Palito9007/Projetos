<template>
   <body>
       <br>
    {{loja()}}
          <p>
        <a href="/" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
        </a>
          </p>
    
   </body>
</template>

<script>
import loja from "@/components/store.vue"
import axios from "axios";
//O navbar / menu esta nos layouts
export default {

  layout: 'sidenav',
    methods: {
    loja() {
      axios.get("http://localhost:8081/loja")
        .then(function(response) {
          console.log(response);

        })
        .catch(function(error) {
          console.log(error);
        });
    },
  }


}



</script>

<style scoped>
body{
    text-align:center;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}
</style>
