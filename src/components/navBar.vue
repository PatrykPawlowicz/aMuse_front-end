<template>
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<nav>
  <a class="navbar-brand" href="/">
    <img src="../assets/logoaMuseWHITE.png" width="120" height="50" alt="">
  </a>
</nav>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/myClassrooms">My classrooms</a>
      </li>
      <li class="nav-item" >
        <a class="nav-link" href="/login" >Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/register">Register</a>
      </li>
      <li class="nav-item" @click="logout">
    <a class="nav-link">Logout</a>
      </li>

    </ul>
    <router-view />
  </div>
</nav>
</template>

<script>
import router from '../router' 
export default {

methods: {
  logout() {
    
    if (localStorage.getItem('user-token'))
    {
       localStorage.setItem('user-token', '');
       console.log('user-token2');
       router.push('/');
       alert("You're logged out successfully")
    }
    else{
      alert("You're not logged in ")
      console.log('user-token')
    }
     }
}
}

</script>

<style>
.nav-item {
  margin: 10px;
}
</style>