<template>


  <hr/>
  <div class="hello">
    <LoginForm/>

    </div>
    <button @click="togglebox">Toggle Box</button>

  <div v-if="isVisible" class="box"></div>
</template>

<script>
 import LoginForm from './components/LoginForm.vue'

export default {

  name: 'App',
  components: {
    LoginForm

  },
  data: function(){
    return{
      greeting:"Hello VUE.JS 3.0",
      isVisible: false
    }


  },
  methods:{
    togglebox(){
      this.isVisible = !this.isVisible
    },
    greet(){
      console.log(this.greeting)
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

h3 {
  margin: 40px 0 0;
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
