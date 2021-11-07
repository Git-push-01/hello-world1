<template >
<label >
  {{label}}
  <input :type="type" v-model="inputValue" >
</label>

</template>

<script >
export default{
  name: "CustomInput",
  props: [ "label","type", "modelValue"],
  computed:{
    inputValue:{
      get(){
        return this.modelValue

      },
      set(value){

        this.$emit("update:modelValue", value)
      },
    }
  }
  // data(){
  //   return{
  //     inputValue:""
  //   }
  // }

}

</script>
