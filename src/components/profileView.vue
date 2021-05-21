<template>
    <div class="wrapper fadeInDown">
  <div id="formContent">

    <div class="fadeIn">
      <h1 class="title">Profile</h1>
    </div>

    <!-- Profile form -->
    <form>
      <div id="app">
      <input type="text" required v-model="name" :disabled="validated == 1" id="firstName" class="fadeIn" name="register" placeholder="Enter First Name here">
      <input type="text" required v-model="surname" :disabled="validated == 1" id="surname" class="fadeIn" name="register" placeholder="Enter Surname here">
      <input type="email" required v-model="email" :disabled="validated == 1" id="e-mail" class="fadeIn" name="register" placeholder="Enter e-mail here">
      <input type="password" required v-model="password" :disabled="validated == 1" id="password" class="fadeIn" name="register" placeholder="Enter password here">
      <input type="text" v-if="isTeacher"  v-model="shortDescription" :disabled="validated == 1" id="shortDescription" class="fadeIn" name="register" placeholder="Tell something about you - short description"> <!--if teacherc-->
      <input type="text" v-if="isTeacher"  v-model="shortDescription" :disabled="validated == 1" id="otherContact" class="fadeIn" name="register" placeholder="Other contact line (phone, social media)"> <!--if teacherc-->

      <input @click="errorPage" type="submit" class="fadeIn regBttn" value="Change your data">
      </div>
    </form>
  </div>
</div>
</template>


<script >
import router from '../router' 
export default {
  methods: {
  
  submitForm() {
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("repassword").value;
    var name = document.getElementById("firstName").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("e-mail").value;
    
        //not match validation
        if (password != rePassword) {
            alert("Passwords do not match.");
            return false;
        }
        //minimum password length validation  
        if(password.length >= 1 & password.length < 8) {  
         alert("Password length must be atleast 8 characters"); 
         return false; 
            
        }
        if(name == '' || surname == '' || email == '' || password != rePassword || password.length < 8){
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