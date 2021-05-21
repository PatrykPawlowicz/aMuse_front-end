<template>
    <div class="wrapper fadeInDown">
  <div id="formContent">

    <div class="fadeIn ">
      <h1 class="title">Registration form</h1>
    </div>

    <!-- Register Form -->
    <form>
      
      <input type="text" required v-model="name" id="firstName" class="fadeIn " name="register" placeholder="Enter First Name here">
      <input type="text" required v-model="surname" id="surname" class="fadeIn " name="register" placeholder="Enter Surname here">
      <input type="email" required v-model="email" id="e-mail" class="fadeIn " name="register" placeholder="Enter e-mail here">
      <input type="password" required v-model="password" id="password" class="fadeIn " name="register" placeholder="Enter password here">
      <input type="password" required v-model="repassword" id="repassword" class="fadeIn " name="register" placeholder="Re-type password">
      <input type="text" v-if="isTeacher"  v-model="shortDescription" id="shortDescription" class="fadeIn" name="register" placeholder="Tell something about you - short description"> <!--if teacherc-->
      <input type="text" v-if="isTeacher"  v-model="shortDescription" id="otherContact" class="fadeIn" name="register" placeholder="Other contact line (phone, social media)"> <!--if teacherc-->

      <div class="form-check fadeIn fifth radio">
         <input class="form-check-input" @click="isTeacher = false" type="radio" name="flexRadioDefault" id="student" checked>
        <label class="form-check-label" for="flexRadioDefault1">
            Student
        </label>
      </div>
      <div class="form-check fadeIn fifth radio">
        <input class="form-check-input control" @click="isTeacher = true"  type="radio" name="flexRadioDefault" id="teacher">
        <label class="form-check-label" for="flexRadioDefault2">
            Teacher
        </label>
        </div>
      <input @click="submitForm()" type="submit" class="fadeIn regBttn" value="Register">
    </form>
  </div>
</div>
</template>


<script>
//import bcrypt from 'bcryptjs';

export default {
  
  
  data() {
    return {
      name: '',
      surname: '',
      email: '',
        password: null,
        repassword: null,
      shortDescription: '',
     
        isTeacher: false
    }
  },
  
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
  //   encryptPassword(password, rePassword){
    
  //   console.log(this.encryptPassword(password, rePassword))
  //   const salt = bcrypt.genSaltSync(10)
  //   return bcrypt.hashSync(password,salt, rePassword, salt);
  //   },
   },
  
}

</script>

<style>
@import url("../main.css");
</style>