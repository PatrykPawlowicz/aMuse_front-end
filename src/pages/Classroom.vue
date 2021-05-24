<template>
    <navBar />
    <mainClass/>
    <contactView />
    <footerCom class="loginPage"/>
</template>

<script>
import navBar from "../components/navBar.vue"
import mainClass from "../components/ClassDetails.vue"
import footerCom from "../components/footerCom.vue"
export default {
  name: 'Class',
  components: {
    navBar,
    mainClass,
    footerCom,
  },
  data(){
      return {
          id:this.$route.params.id
        }
  }
}
</script>
<style>
@import url("../main.css");
</style>