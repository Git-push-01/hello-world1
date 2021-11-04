<template>

  <HelloWorld msg="hugo is the best how about this vue.js"/>
  <hr/>
    <input/>
    <button @click="togglebox">Toggle Box</button>

  <div v-if="isVisible" class="box"></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {

  name: 'App',
  components: {
    HelloWorld
  },
  data: function(){
    return{
      isVisible: false
    }
    

  },
  methods:{
    togglebox(){
      this.isVisible = !this.isVisible
    }

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
