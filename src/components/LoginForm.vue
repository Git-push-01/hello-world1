 <template>
  <form @submit.prevent= "handleSubmit">
    <h1>{{title}}</h1>
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button>Log In</button>
  </form>
</template>

<script>

export default {

  name: 'LoginForm',
  data(){
    return{
      title: "Login Form",
      email:"",
      password:""
    }
  },
  methods:{
    handleSubmit(){
      console.log(this.email, this.password);
    }
  }
}
</script>
<style scoped>
input{
  margin: 10px;
  display: block;


}


</style>
