![slogan](https://user-images.githubusercontent.com/11075892/42421484-e620f0d8-8308-11e8-8b6c-0e659eadfcd3.png)     
   
   
# vue-ins-progress-bar    

[![license](https://img.shields.io/npm/l/vue-ins-progress-bar?color=%2351bff4)](https://revolunet.mit-license.org/) [![npm](https://img.shields.io/npm/v/vue-ins-progress-bar?color=%2333efc7)](https://www.npmjs.com/package/vue-ins-progress-bar) [![downloads](https://img.shields.io/npm/dm/vue-ins-progress-bar?color=%23ad43a7)](https://www.npmjs.com/package/vue-ins-progress-bar) [![ts](https://img.shields.io/badge/ts-supported-ff69b4)](https://github.com/meloalright/vue-ins-progress-bar/tree/master/types/index.d.ts)

   
`a vue component of ins-style progress bar`   
   
`一款 ins 风格的 vue 进度条组件`   
   
## Demo    
    
[Live Demo](https://meloalright.github.io/vue-ins-progress-bar/)   
   
## Install    
    
```shell
$ npm i vue-ins-progress-bar   
```
   
## Usage    
   
`main.js`   
   
```JavaScript
import VueInsProgressBar from 'vue-ins-progress-bar'

const options = {
  position: 'fixed',
  show: true,
  height: '3px'
}

Vue.use(VueInsProgressBar, options)
```
    
    
    
`App.vue`    
    
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
   
## APIs   
   
```JavaScript
this.$insProgress.start() // start the loading
```
   
```JavaScript
this.$insProgress.finish() // finish the loading
```
   
```JavaScript
this.$insProgress.height(4) // resize the height of loading bar to 4px
```
   
   
## Browsers Support  
   
`Modern browsers and Internet Explorer 9+ (IE9 purple)`   
   
   
## Source    
   
Repository: [vue-ins-progress-bar](https://github.com/meloalright/vue-ins-progress-bar)      
   
Contributors: [contributors](https://github.com/meloalright/vue-ins-progress-bar/graphs/contributors)   
   
Author: [meloalright](https://github.com/meloalright)   
   
   
## Popularity    
   
[![downloads](https://img.shields.io/npm/dm/vue-ins-progress-bar?color=%23ad43a7)](https://www.npmjs.com/package/vue-ins-progress-bar)
   
   
## ChangeLog    
   
Documented in [Releases](https://github.com/meloalright/vue-ins-progress-bar/releases)   


## License   
   
[MIT](https://opensource.org/licenses/MIT)   
