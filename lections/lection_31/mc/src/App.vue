<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button v-on:click="addMsg">Add message</button>
    <button v-on:click="secondMsg">Add second message</button>
    <button v-on:click="clearMsg">Clear</button>
    <messageBox v-bind:messageProp="data"/>
  </div>
</template>

<script>
import messageBox from '@/components/common/messageBox';

let App = {
  name: 'App',
  components: {
    messageBox
  },
  data: function(){
    return {
      data: {}
    }
  },
  methods: {
    addMsg() {
      this.data = { text: 'Some', class: 'success' };
    },
    secondMsg() {
      this.data = { text: 'Second', class: 'error' };
    },
    clearMsg(){
      this.data = {
        text: ''
      };
    }
  }
}

export default App;
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
