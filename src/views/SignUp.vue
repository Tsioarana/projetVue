<template>
  <div class="container mt-5">
    <h2>Inscription</h2>
    <form @submit.prevent="register" class="mt-5">
      <div class="form-floating mb-3 mt-3">
        <input type="text" class="form-control" id="username" v-model="username" placeholder="name" name="name" required>
        <label for="username">Username</label>
      </div>
      <div class="form-floating mb-3 mt-3">
        <input type="email" class="form-control" id="email" v-model="email" placeholder="email" name="email" required>
        <label for="email">Email</label>
      </div>
      <div class="form-floating mb-3 mt-3">
        <input type="password" class="form-control" id="password" v-model="password" placeholder="password" name="password" required>
        <label for="password">Password</label>
      </div>
      <div class="form-floating mb-3 mt-3">
        <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" placeholder="confirm password" name="confirmPassword" required>
        <label for="confirmPassword">Confirm Password</label>
      </div>
      <button type="submit" class="btn btn-primary">Inscription</button>
    </form>
    <p v-if="error" class="mt-3" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match.';
        return;
      }

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.some(user => user.username === this.username || user.email === this.email);
      if (userExists) {
        this.error = 'Username or email already exists. Please choose another one.';
      } else {
        users.push({ username: this.username, email: this.email, password: this.password });
        localStorage.setItem('users', JSON.stringify(users));
        this.$router.push('/');
      }
    }
  }
};
</script>
