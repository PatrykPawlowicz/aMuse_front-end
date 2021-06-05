<template>
    <navBar />
    <lesson />
    <footerCom class="loginPage"/>
</template>

<script>
import navBar from "../components/navBar.vue"
import lesson from "../components/lesson.vue"
import footerCom from "../components/footerCom.vue"
export default {
  name: 'Class',
  components: {
    navBar,
    lesson,
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