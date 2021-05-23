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
      <input @click="submitForm()" type="button" class="fadeIn regBttn" value="Register">
    </form>
  </div>
</div>
</template>


<script>
import router from '../router'
export default {
  
  data() {
    return {
      name: '',
      surname: '',
      email: '',
        password: '',
        repassword: '',
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
          this.register();
        return true;
        
        }  
  },  

register(){
const url = "https://localhost:5001/Auth/register";

    var password = this.password
    var name = this.name
    var surname = this.surname
    var email = this.email

var myHeaders = new Headers();
myHeaders.append("content-Type", "application/json");

var raw = JSON.stringify({"name": name, "surname": surname, "email": email, "password": password});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(url, requestOptions)
  .then(response => response.json())
    alert("New user successfully added")
    router.push('login')
  }
  }
}
</script>



<style>
@import url("../main.css");
</style>