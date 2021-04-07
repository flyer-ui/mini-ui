import Vue from 'vue'
import App from './App'
import MiniUI from './ui/index'

Vue.use(MiniUI)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
