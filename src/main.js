import { createApp } from 'vue';
import App from './views/App.vue';
import router from './router'; // Assurez-vous que le chemin est correct

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

// Utilisation du routeur
app.use(router);

// Montage de l'application sur l'élément avec l'ID "app" dans votre fichier HTML
app.mount('#app');
