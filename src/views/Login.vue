<template>
  <div class="container mt-5">
    <h2>Login</h2>
    <form @submit.prevent="login" class="mt-5">
      <div class="form-floating mb-3 mt-3">
        <input type="email" class="form-control" id="email" v-model="email" placeholder="email" name="email" required>
        <label for="email">Email</label>
      </div>
      <div class="form-floating mb-3 mt-3">
        <input type="password" class="form-control" id="password" v-model="password" placeholder="password" name="password" required>
        <label for="password">Password</label>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <router-link to="/register" class="container" style="color: #9ae03e;">Créer un compte</router-link>
      <a href="" style="color: #eceaea; text-decoration: none;">mot de passe oublié?</a>
    </form>
    <p v-if="error" class="mt-3" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      if (this.email === 'admin@gmail.com' && this.password === 'admin12') {
        this.$router.push('/admin-dashboard');
      } else {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(user => user.email === this.email && user.password === this.password);
        if (user) {
          this.$emit('authenticated');
          this.$router.push('/home');
        } else {
          this.error = 'Invalid credentials. Please try again.';
        }
      }
    }
  }
};
</script>


      
   