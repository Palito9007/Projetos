

<template>

    <body>
      <div class="container">
        <br>
        <h5>Insira o seu e-mail</h5>
        <input type="text" name="email" id="email">
        <br>
        <br>
        <h5>Insira a respectiva password da sua conta</h5>
        <input type="text" name="password" id="password">
        <br>
        <br>
        <button type="button">Log in </button>
      </div>
    </body>

</template>









<script>
export default {
  layout: 'sidenav',
  methods:{
    login(login){
        axios.post("http://localhost:8081/login", this.obj).then(function(response){
      response.data
    })
    }
  }
}
</script>


<style>

</style>
