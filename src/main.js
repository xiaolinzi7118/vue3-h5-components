import { createApp } from 'vue'
import * as Vue from 'vue'
import './style.css'
import App from './App.vue'

import '../libComponent/style.css'
const scriptDom = document.createElement('script')
scriptDom.src = './libComponent/my-lib.umd.js'
document.head.appendChild(scriptDom)
window.scriptDom = scriptDom


const app = createApp(App)
// window.VueApp = app
window.Vue = Vue
// app.mount('#app')
console.log('window.scriptDom: ', window.scriptDom);
window.scriptDom.onload = () => {
  app.use(MyLib.ButtonPlugin).mount('#app')
}
