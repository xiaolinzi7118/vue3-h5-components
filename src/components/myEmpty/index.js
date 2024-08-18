import Empty from './myEmpty.vue'

export const EmptyPlugin = {
  install(app) {
    app.component('my-empty', Empty)
  }
}

export { Empty }
