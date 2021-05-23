<template>
<navBar />
<newLessonView :id="id"/>
<footerCom />
</template>

<script>
import navBar from "../components/navBar.vue"
import footerCom from "../components/footerCom.vue"
import newLessonView from "../components/newLessonView.vue"
export default {
  name: 'RegisterPage',
  components: {
    navBar,
    footerCom,
    newLessonView,
  },
  data(){
      return {
          id:this.$route.params.id
        }
  }
}
</script>
