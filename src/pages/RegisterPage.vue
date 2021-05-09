<template>
<navBar />
<registerView />
<footerCom />
</template>

<script>
import navBar from "../components/navBar.vue"
import footerCom from "../components/footerCom.vue"
import registerView from "../components/registerView.vue"
export default {
  name: 'RegisterPage',
  components: {
    navBar,
    footerCom,
    registerView,
  }
}
</script>
