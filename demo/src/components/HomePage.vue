<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br/>
    <h2>Just press &nbsp;<toggle-button :value="isLoading" @change="change" :labels="{checked: 'Loading', unchecked: 'Finished'}" :width="80"/>&nbsp;</h2>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'vue-ins-progress-bar',
      isLoading: true,
    }
  },
  methods: {
    start() {
      this.$insProgress.start()
    },
    finish() {
      this.$insProgress.finish()
    },
    change(e) {
      this.isLoading = e.value;
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
