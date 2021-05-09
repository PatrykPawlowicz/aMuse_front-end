<template>
<navBar />
<loginView />
<footerCom />
</template>

<script>
import navBar from "../components/navBar.vue"
import footerCom from "../components/footerCom.vue"
import loginView from "../components/loginView.vue"
export default {
  name: 'LoginPage',
  components: {
    navBar,
    footerCom,
    loginView,
  }
}
</script>
