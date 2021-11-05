 <template>
  <form @submit.prevent= "handleSubmit">
    <h1>{{title}}</h1>
    <CustomInput type="email" :label="emailLabel"/>
    <CustomInput type="password" :label="passwordLabel"/>
    <button>Log In</button>
  </form>
</template>

<script>
import CustomInput from "./CustomInput.vue"

export default {

  name: 'LoginForm',
  components: {
  CustomInput
},
  data(){
    return{
      title: "Login Form",
      email:"",
      password:"",
      emailLabel:"Email",
      passwordLabel:"Password"
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



</style>
