

<template>

<div class="container login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Formulário de Login</h2>
      <label for="inputEmail" class="sr-only">Insira o seu E-mail</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Insira o seu E-mail" required autofocus>
      <label for="inputPassword" class="sr-only">Insira a respectiva password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Insira a respectiva password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
  </div>
</template>









<script>
export default {
  layout: 'sidenav',
  name: 'login',
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      loggingIn: false,
      error: ''
    }
  },
  methods: {
    submit () {
      this.loggingIn = true
      const credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }
      // Auth.login() returns a promise. A redirect will happen on success.
      // For errors, use .then() to capture the response to output
      // error_description (if exists) as shown below:
      this.$auth.login(credentials, 'dashboard').then((response) => {
        this.loggingIn = false
        this.error = utils.getError(response)
      })
    },
  }
}
</script>


<style>
.container{
  display: block;
  text-align: center;

}
.ev-login {
  margin-top: 100px;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>