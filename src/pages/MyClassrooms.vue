<template>
    <navBar />
    <myClassromsListView />
    <aside-view/>
    <footerCom class="loginPage"/>
</template>

<script>
import navBar from "../components/navBar.vue"
//import mainView from "../components/mainView.vue"
import footerCom from "../components/footerCom.vue"
import myClassromsListView from "../components/myClassroomsListView.vue"
import asideView from "../components/adsView.vue"
export default {
  name: 'MyClasses',
  components: {
    navBar,
    myClassromsListView,
    asideView,
    footerCom,
  },
  
}
</script>
<style>
.loginPage{
  position: absolute;
  
}
</style>