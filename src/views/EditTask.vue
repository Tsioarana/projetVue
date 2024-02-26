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
      <h2>Modifier Tâche</h2>
      <form @submit.prevent="editTask" class="mb-4">
        <div class="mb-3">
          <label for="editTaskName" class="form-label">Nom:</label>
          <input type="text" id="editTaskName" v-model="editedTask.name" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="editTaskNumber" class="form-label">Numéro:</label>
          <input type="number" id="editTaskNumber" v-model="editedTask.number" class="form-control" required>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" id="editTaskCompleted" v-model="editedTask.isCompleted" class="form-check-input">
          <label for="editTaskCompleted" class="form-check-label">Complété</label>
        </div>
        <button type="submit" class="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditTask',
  data() {
    return {
      editedTask: {
        name: '',
        number: '',
        isCompleted: false
      }
    };
  },
  created() {
    const index = this.$route.params.index;
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.editedTask = { ...tasks[index] };
  },
  methods: {
    editTask() {
      const index = this.$route.params.index;
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks[index] = { ...this.editedTask };
      localStorage.setItem('tasks', JSON.stringify(tasks));
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
