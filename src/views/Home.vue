<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-white bg-dark">
      <div class="container">
        <router-link to="/home" class="home">LOGO</router-link>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <!-- Ajoutez d'autres liens de navigation au besoin -->
          </ul>
          <button @click="logout" class="btn btn-outline-success">Logout</button>
        </div>
      </div>
    </nav>
    
    <!-- Contenu de la page d'accueil -->
    <div class="container mt-4">
      <!-- Formulaire pour créer une nouvelle tâche -->
      <form @submit.prevent="addTask" class="mb-4">
        <div class="mb-3">
          <label for="taskName" class="form-label">Nom:</label>
          <input type="text" id="taskName" v-model="newTask.name" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="taskNumber" class="form-label">Numéro:</label>
          <input type="number" id="taskNumber" v-model="newTask.number" class="form-control" required>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" id="taskCompleted" v-model="newTask.isCompleted" class="form-check-input">
          <label for="taskCompleted" class="form-check-label">Complété</label>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter Tâche</button>
      </form>
  
      <!-- Tableau pour afficher les tâches existantes -->
      <table class="table">
        <thead>
          <tr>
            <th>iD</th>
            <th>Nom</th>
            <th>Numéro</th>
            <th>Complété</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ task.name }}</td>
            <td>{{ task.number }}</td>
            <td>{{ task.isCompleted ? 'Oui' : 'Non' }}</td>
            <td>
              <router-link :to="{ name: 'ViewTask', params: { index: index }}" class="btn btn-primary btn-sm">Views</router-link>
              <router-link :to="{ name: 'EditTask', params: { index: index }}" class="btn btn-primary btn-sm">Modifier</router-link>
              <button @click="deleteTask(index)" class="btn btn-danger btn-sm">Supprimer</button>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      newTask: {
        name: '',
        number: '',
        isCompleted: false
      },
      tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
    };
  },
  methods: {
    addTask() {
      this.tasks.push({ ...this.newTask });
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.newTask = { name: '', number: '', isCompleted: false };
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
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
