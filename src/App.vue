<template>
  <router-view/>
  
</template>




<style>
html, body {
	margin:0;
	padding:0;
  min-height: 100%;
}
#container {
		min-height:100%;
		position:relative;
	}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
