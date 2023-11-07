import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ComponentLibrary } from "solaris-vue";

createApp(App).use(ComponentLibrary).mount("#app");
