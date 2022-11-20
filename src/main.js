import { createApp } from 'vue'
import App from './App.vue'
import Cloudinary from "cloudinary-vue";


createApp(App).
use(Cloudinary, {
  configuration: { 
   cloudName: "dyyxzvhgr",
   secure: true 
  }
 }).mount('#app');