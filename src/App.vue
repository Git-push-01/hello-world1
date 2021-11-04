<template>

  <HelloWorld msg="hugo is the best how about this vue.js"/>
  <hr/>
    <input/>
    <button type="button" name="button">Show Box</button>

  <div  class="box"></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {

  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box{
  background-color: black;
  height: 200px;
  width: 1000px;
}
</style>
