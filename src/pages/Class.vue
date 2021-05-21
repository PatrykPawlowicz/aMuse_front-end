<template>
    <navBar />
    <mainClass/>
    <contactView />
    <footerCom class="loginPage"/>
</template>

<script>
import navBar from "../components/navBar.vue"
import mainClass from "../components/mainClass.vue"
import contactView from "../components/contactView"
import footerCom from "../components/footerCom.vue"
export default {
  name: 'Class',
  components: {
    navBar,
    mainClass,
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