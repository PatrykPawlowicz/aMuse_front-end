<template>
    <div class="wrapper fadeInDown">
  <div id="formContent">

    <!-- Logo -->
    <div class="fadeIn ">
      <h1 class="title">Login form</h1>
    </div>

    <!-- Login Form -->
    
    <form>
      <input type="text" id="login" class="fadeIn " name="login" placeholder="login">
      <input type="password" id="password" class="fadeIn " name="login" placeholder="password">
      <input type="submit"  class="fadeIn nav-link nav-item" value="Log In">
    </form>
    
    

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
</template>




<style>
@import url("../main.css");

.title{
margin: 40px 10px 40px 10px;
font-family: 'Segoe UI';
font-size: 30px;

}

</style>