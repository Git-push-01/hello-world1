 <template>
  <form @submit.prevent= "handleSubmit">
    <h1>{{title}}</h1>

    <CustomInput
    v-for="(input, i) in inputs"
    :key="i"
    v-model="input.value"
     :label="input.label"
     :type="input.type"
     />



  <button> Log In</button>

  </form>
</template>

<script>
import CustomInput from "./CustomInput.vue"





export default {

  name: 'LoginForm',
  components: {
  CustomInput,



},
  data(){
    return{
      title: "Login Form",
      inputs: [
      {
        label:"Email",
        value:"",
        type:"email"
      },
      {
        label:"Password",
        value:"",
        type:"password"
      }
      ],
    }
  },
  methods:{
    handleSubmit(){
      this.$router.push('/UserPage')
      console.log(this.inputs[0].value, this.inputs[1].value)

    }
  }
}
</script>
<style scoped>



</style>
