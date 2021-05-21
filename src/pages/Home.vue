<template id="app">
  <navBar />
  <mainView />
  <asideView>
    
  </asideView>
  <footerCom class="homePage"/>
  <loginView />
</template>

<script>
// @ is an alias to /src

import navBar from "../components/navBar.vue"
import footerCom from "../components/footerCom.vue"
import mainView from "../components/mainView.vue"
import asideView from "../components/adsView.vue"
export default {
  name: 'Home',
  components: {
    mainView,
    asideView,
    navBar,
    footerCom,
  }
}

</script>

