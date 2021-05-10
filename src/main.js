import Vue from 'vue'
import App from './App.vue'
import router from "@/router"   //@=src的绝对路径

Vue.config.productionTip = false
 //引入全局组件
 import MyHeader from "./components/MyHeader"
//2. 将MyHeader组件对象变成了全局组件
Vue.component("my-header",MyHeader);
//结果: 在当前项目中任何位置都可使用<my-header>引用页头


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
 