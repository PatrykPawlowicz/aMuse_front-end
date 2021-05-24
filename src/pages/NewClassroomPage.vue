<template>
<navBar />
<newClassroomView />
<footerCom class="loginPage"/>
</template>

<script>
import navBar from "../components/navBar.vue"
import footerCom from "../components/footerCom.vue"
import newClassroomView from "../components/newClassroomView.vue"
export default {
  name: 'RegisterPage',
  components: {
    navBar,
    footerCom,
    newClassroomView,
  }
}
</script>

<style>
@import url("../main.css");
</style>
