<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-white bg-dark">
      <div class="container">
        <router-link to="/home" class="home">Dashboard Admin</router-link>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
          </ul>
          <button @click="logout" class="btn btn-outline-success">Logout</button>
        </div>
      </div>
    </nav>
    <br><br>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Mot de passe (crypté)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ decryptPassword(user.password) }}</td>
            <td>
              <button @click="deleteUser(index)" class="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      users: []
    };
  },
  created() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      this.users = users;
    },
    deleteUser(index) {
      this.users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    decryptPassword(encryptedPassword) {
      const decryptedPassword = encryptedPassword
        .split('')
        .map(char => {
          return String.fromCharCode(char.charCodeAt(0) - 1);
        })
        .join('');
      return decryptedPassword;
    },
    logout() {
      this.$emit('logout');
    }
  }
};
</script>

<style scoped>
</style>
