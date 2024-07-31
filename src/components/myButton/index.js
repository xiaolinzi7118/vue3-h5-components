import Button from './MyButton.vue'

export const ButtonPlugin = {
  install(app) {
    app.component('my-button', Button)
  }
}

export { Button }
