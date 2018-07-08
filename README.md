# vue-ins-progress-bar   
   
`a vue component of ins-style progress bar`   
   
`一款 ins 风格的 vue 进度条组件`   
   
# Install    
    
```    
npm install vue-ins-progress-bar
```
   
# Demo    
   
```JavaScript
import Vue from 'vue'
import App from './App'
import router from './router'
import VueInsProgressBar from 'vue-ins-progress-bar'

Vue.config.productionTip = false



const options = {
  position: 'fixed',
  show: true,
  height: '3px'
}

Vue.use(VueInsProgressBar, options)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```
    
```vue    
<template>
  <div id="app">
    <router-view/>
    <vue-ins-progress-bar></vue-ins-progress-bar>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$insProgress.finish()
  },
  created () {
    this.$insProgress.start()

    this.$router.beforeEach((to, from, next) => {
      this.$insProgress.start()
      next()
    })

    this.$router.afterEach((to, from) => {
      this.$insProgress.finish()
    })
  }
}
</script>
```       
   
## License   
   
`MIT`