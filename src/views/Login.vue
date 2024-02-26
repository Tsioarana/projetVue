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
      // Vérifiez si les identifiants sont admin/admin12
      if (this.email === 'admin@gmail.com' && this.password === 'admin12') {
        // Redirigez vers le tableau de bord de l'administrateur
        this.$router.push('/admin-dashboard');
      } else {
        // Sinon, vérifiez les identifiants dans le localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(user => user.email === this.email && user.password === this.password);
        if (user) {
          // Authentification réussie, redirigez vers la page d'accueil
          this.$emit('authenticated');
          this.$router.push('/home');
        } else {
          // Identifiants invalides
          this.error = 'Invalid credentials. Please try again.';
        }
      }
    }
  }
};
</script>


      
   