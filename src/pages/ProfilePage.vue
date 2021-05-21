<template>
<navBar />
<profileView />
<footerCom class="loginPage" />
</template>

<script>
import navBar from "../components/navBar.vue"
import footerCom from "../components/footerCom.vue"
import profileView from "../components/profileView"
export default {
  name: 'Profile Page',
  components: {
    navBar,
    footerCom,
    profileView,
  }
}
</script>
<style>
.loginPage{
  position: absolute;
  
}
</style>