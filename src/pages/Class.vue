<template>
    <navBar />
    <mainView />
    <contactView />
    <footerCom class="loginPage"/>
</template>

<script>
import navBar from "../components/navBar.vue"
import mainView from "../components/mainView.vue"
import contactView from "../components/contactView"
import footerCom from "../components/footerCom.vue"
export default {
  name: 'Class',
  components: {
    navBar,
    mainView,
    footerCom,
    contactView,
  }
}
</script>
<style>
.loginPage{
  position: absolute;
  
}
</style>