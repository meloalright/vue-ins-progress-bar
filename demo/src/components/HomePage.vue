<template>
  <div class="hello">
    <img :src="rainbow" style="max-width: 100%; margin: auto" v-on:load="onload"/>
    <br/>
    <h2 v-show="loaded" style="width: 248px; margin: auto; text-align: left; overflow: hidden; white-space: nowrap; ">Press &nbsp;<toggle-button :value="isLoading" @change="change" :labels="{checked: 'Loading', unchecked: 'Finished'}" :width="80"/>&nbsp; {{text}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      rainbow: 'https://user-images.githubusercontent.com/11075892/42421484-e620f0d8-8308-11e8-8b6c-0e659eadfcd3.png',
      text: 'to finish',
      isLoading: true,
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
</style>
