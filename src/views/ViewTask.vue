<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-white bg-dark">
      <div class="container">
        <router-link to="/home" class="home">LOGO</router-link>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
          </ul>
          <button @click="logout" class="btn btn-outline-success">Logout</button>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <h2>Views Tâche</h2>
      <form @submit.prevent="viewTask" class="mb-4">
        <div class="mb-3">
          <label for="viewtaskName" class="form-label">Nom:</label>
          <input type="text" id="viewtaskName" v-model="viewtask.name" class="form-control" readonly>
        </div>
        <div class="mb-3">
          <label for="viewtaskNumber" class="form-label">Numéro:</label>
          <input type="number" id="viewtaskNumber" v-model="viewtask.number" class="form-control" readonly>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" id="viewtaskCompleted" v-model="viewtask.isCompleted" class="form-check-input" readonly>
          <label for="viewtaskCompleted" class="form-check-label">Complété</label>
        </div>
        <button type="submit" class="btn btn-primary">Retour</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewTask',
  
  created() {
    const index = this.$route.params.index;
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.viewtask = { ...tasks[index] };
  },
  methods: {
    viewTask() {
      this.$router.push('/home');
    },
    logout() {
      this.$emit('logout');
    }
  }
  
};
</script>

<style>
  .home{
    color: #e6d6d6;
    text-decoration: none;
    font-size: 2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>
