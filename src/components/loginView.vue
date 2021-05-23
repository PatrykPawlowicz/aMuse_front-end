<template>
    <div class="wrapper fadeInDown">
  <div id="formContent">

    <!-- Logo -->
    <div class="fadeIn ">
      <h1 class="title">Login form</h1>
    </div>

    <!-- Login Form -->
    
    <form>
      <input type="text" required v-model="login" id="login" class="fadeIn " name="login" placeholder="e-mail">
      <input type="password"  required v-model="password" id="password" class="fadeIn " name="login" placeholder="password">
      <input type="button" @click="logIn()" class="fadeIn nav-link nav-item" value="Log In">
    </form>
    
    

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
</template>


<script>
//import router from '../router' 
export default {
  
  
  data() {
    return {
      login:'',
      password:''
    }
  },
  
  methods: {
    logIn() {
        var login = this.login;
        var password = this.password;
        var valid = false;
        var response;
        

        if(login.length<3 ){
        alert("Enter the correct data");
        valid = false;
        }else{
        valid = true;
        }
        console.log(valid);
        if(valid){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"email":login,"password":password});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://localhost:5001/Auth/login", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.success) {
              console.log(result.data);
              //router.push('');
            }
            else
              alert(response.message);
            })
          .catch(error => console.log('error', error));
        
         }
     },  
  },
}
</script>


<style>
@import url("../main.css");

.title{
margin: 40px 10px 40px 10px;
font-family: 'Segoe UI';
font-size: 30px;

}

</style>