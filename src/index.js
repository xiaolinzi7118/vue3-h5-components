import { ButtonPlugin } from './components/myButton'
import { EmptyPlugin } from './components/myEmpty'
import 'vant/lib/index.css';

const MyLibPlugin = {
  install(app) {
    ButtonPlugin.install?.(app)
    EmptyPlugin.install?.(app)
  }
}

export default MyLibPlugin

export * from './components/myButton'
export * from './components/myEmpty'
