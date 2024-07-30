import myButton from './src/components/myButton/index.vue'
import 'vant/lib/index.css';
import { createApp } from 'vue'
const install = function (Vue) {
  const app = createApp()
  app.component('myButton', myButton)
}
console.log('vue', window.Vue)
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  myButton
}