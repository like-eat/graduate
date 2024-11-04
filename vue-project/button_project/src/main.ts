// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入我们刚创建的路由

createApp(App).use(router).mount('#app');

