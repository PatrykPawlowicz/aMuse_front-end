<template>
  <headerCom />
  <navBar />
  <mainView />
  <asideView />
  <footerCom class="homePage"/>
  <loginView />
</template>

<script>
// @ is an alias to /src

import navBar from "../components/navBar.vue"
import footerCom from "../components/footerCom.vue"
import headerCom from "../components/headerCom.vue"
import mainView from "../components/mainView.vue"
import asideView from "../components/asideView.vue"
export default {
  name: 'Home',
  components: {
    headerCom,
    mainView,
    asideView,
    navBar,
    footerCom,
  }
}
</script>
<style>
.homePage{
  position: absolute;
  
}
</style>

