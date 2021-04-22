<template>
<header id="header">
<img src="./assets/aMuse_logo.png" alt="aMuse">
</header>
<nav id="nav">
  <ul>
    <li class="li">
      Home
    </li>
    <li class="li">
      Log in
    </li>
    <li class="li">
      Register
    </li>
  </ul>
</nav>
<main id="main">
  <h3>Some lesson</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod suscipit eaque voluptatem dolorem veniam, accusantium facere at sit minus nihil hic perferendis fugiat laudantium nam illum beatae est ipsam?</p>

</main>
<aside id="aside1">
  Advertisement/Chat
</aside>
<footer id="footer">aMuse Team developer 2021</footer>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#header{
  justify-content: center;
  text-align: center;
  
}
#nav{
text-align: center;
background-color:#A8B1BF;

}
#main{
margin: 1%;
width: 74%;
float: left;
}
#aside1{
width: 22%;
margin: 1%;
float: left
}
#footer{
  padding: 10px;
  text-align: center;
  clear: both;

}
.li{
  padding: 5px 5px 5px 5px;
  margin: 5px;
  display: inline-block;
  background-color: #7dbed6;
  border-radius: 25%;
}
</style>
