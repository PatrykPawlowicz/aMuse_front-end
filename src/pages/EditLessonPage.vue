<template>
<navBar />
<editLessonView />
<footerCom class="loginPage"/>
</template>

<script>
import navBar from "../components/navBar.vue"
import footerCom from "../components/footerCom.vue"
import editLessonView from "../components/editLessonView.vue"
export default {
  name: 'RegisterPage',
  components: {
    navBar,
    footerCom,
    editLessonView,
  },
  data(){
      return {
        }
  }
}
</script>

<style>
@import url("../main.css");
</style>
