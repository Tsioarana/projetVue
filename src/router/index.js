import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue'; 
import Home from '../views/Home.vue'; 
import EditTask from '../views/EditTask.vue';
import ViewTask from '../views/ViewTask.vue';
import SignUp from '@/views/SignUp.vue';
import AdminDashboard from '@/views/AdminDashboard';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/register',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/edit/:index',
    name: 'EditTask',
    component: EditTask
  },
  {
    path: '/views/:index',
    name: 'ViewTask',
    component: ViewTask
  }
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes
});

export default router;
