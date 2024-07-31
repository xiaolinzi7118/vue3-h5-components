import { ButtonPlugin } from './components/myButton'
import 'vant/lib/index.css';

const MyLibPlugin = {
  install(app) {
    ButtonPlugin.install?.(app)
  }
}

export default MyLibPlugin

export * from './components/myButton'
