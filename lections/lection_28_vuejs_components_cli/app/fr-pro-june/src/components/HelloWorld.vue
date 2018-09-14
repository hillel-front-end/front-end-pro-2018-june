<template>
  <div class="hello">
    <slot></slot>    
  </div>
</template>

<script>
var HelloWorld = {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}

export default HelloWorld;
</script>

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
</style>
