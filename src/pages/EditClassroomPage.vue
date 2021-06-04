<template>
<navBar />
<editClassroomView />
<footerCom class="loginPage"/>
</template>

<script>
import navBar from "../components/navBar.vue"
import footerCom from "../components/footerCom.vue"
import editClassroomView from "../components/editClassroomView.vue"
export default {
  name: 'RegisterPage',
  components: {
    navBar,
    footerCom,
    editClassroomView,
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
