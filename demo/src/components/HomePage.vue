<template>
  <div class="hello">
    <img v-bind:style="{opacity: loaded? 1: 0 }" src="@/assets/rainbow.png" class="rainbow"/>
    <br/>
    <h2 v-bind:style="{opacity: loaded? 1: 0 }" class="switch">Press &nbsp;<toggle-button :value="isLoading" @change="change" :labels="{checked: 'Loading', unchecked: 'Finished'}" :width="80"/>&nbsp; {{text}}</h2>
    <br/>
    <br/>
    <br/>
    <a class="github" v-bind:style="{opacity: loaded? 1: 0 }" :href="github"><img src="@/assets/badage.svg"></a>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      github: 'https://github.com/meloalright/vue-ins-progress-bar',
      text: 'to finish',
      isLoading: true,
      handler: null,
      loaded: false
    }
  },
  methods: {
    onload() {
      this.loaded = true
    },
    start() {
      this.$insProgress.start()
    },
    finish() {
      this.$insProgress.finish()
    },
    change(e) {
      this.isLoading = e.value;
      this.text = this.isLoading ? 'to finish': 'to start'
      this.isLoading ? this.start(): this.finish()
    }
  },
  created () {
    this.$insProgress.start()
  },
  mounted () {
    this.handler = () => {
      this.onload()
    };
    setTimeout(this.handler, 10)
    window.addEventListener('load', this.handler)
  },
  beforeDestroy () {
    window.removeEventListener('load', this.handler)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  background-color: #FFF;
  border-radius: 4px;
  line-height: 20px;
  cursor: pointer;
  outline: none;
  width: 60px;
  margin: 5px;
}
.rainbow {
  transition: opacity 0.5s ease-in-out;
  max-width: 80%;
  margin: auto;
}
.switch {
  width: 248px;
  margin: auto;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.5s ease-in-out;
}
.github {
  transition: opacity 0.5s ease-in-out;
}
</style>
