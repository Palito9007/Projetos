<template>
   <body>
         <form action="/signup" method="post">
        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" name="email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password">
        </div>

        <button type="submit" class="btn btn-warning btn-lg">Signup</button>
    </form>
      <p>Já tem conta? Faça <a href="/login">Login</a></p>
    <p>Ou volte para  <a href="/">o index</a>.</p>
   </body>
</template>

<script>
import axios from 'axios';
//O navbar / menu esta nos layouts
export default {
  layout: "sidenav",
};
</script>

<style scoped>
body {
  background-color: black;
}
</style>
