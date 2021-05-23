<template>
    <div class="wrapper fadeInDown">
  <div id="formContent">

    <div class="fadeIn">
      <h1 class="title">Profile</h1>
    </div>

    <!-- Profile form -->
    <form>
      <div id="app">
      <input type="text" required v-model="name" :disabled="disabled" id="firstName" class="fadeIn" name="register" placeholder="Enter First Name here">
      <input type="text" required v-model="surname" :disabled="disabled" id="surname" class="fadeIn" name="register" placeholder="Enter Surname here">
      <input type="email" required v-model="email" :disabled="disabled" id="e-mail" class="fadeIn" name="register" placeholder="Enter e-mail here">
      <input type="password" required v-model="password" :disabled="disabled" id="password" class="fadeIn" name="register" placeholder="Enter password here">
      <input type="password" required v-model="repassword" id="repassword" class="fadeIn " name="register" placeholder="Re-type password">

      <input @click="disabled=!disabled" v-if="disabled" type="button" class="fadeIn regBttn" value="Change your data">
      <input @click="submitform()" v-if="disabled==false" type="submit" class="fadeIn regBttn" value="Save">
      </div>
    </form>
  </div>
</div>
</template>


<script >
import router from '../router' 
export default {
  data() {
    return{
    name: '',
    surname: '',
    email: '',
    password: '',
    repassword: '',
    disabled: true
    }
  },
  methods: {
  
  submitForm() {
    var password = this.password
    var repassword = this.repassword
    var name = this.name
    var surname = this.surname
    var email = this.email
    
        //not match validation
        if (password != repassword) {
            alert("Passwords do not match.");
            return false;
        }
        //minimum password length validation  
        if(password.length >= 1 & password.length < 8) {  
         alert("Password length must be atleast 8 characters"); 
         return false; 
            
        }
        if(name == '' || surname == '' || email == '' || password != repassword || password.length < 8){
        alert("Enter the correct data");
        return false;
        }else{
        return true;
        }
  },
  errorPage(){

    router.push('404')

    }

},
}

</script>

<style>
@import url("../main.css");
</style>