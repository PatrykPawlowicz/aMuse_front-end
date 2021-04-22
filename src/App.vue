<template>
<header id="header">
<img src="./assets/aMuse_logo-2.png" alt="aMuse">
</header>
<nav>
  <ul>
  <li style="float:left">
      <a href="">Home</a> 
    </li>
    <li>
      <a href="">Log in</a> 
    </li>
    <li>
      <a href="">Register</a> 
    </li>
  </ul>
</nav>
<main id="main">
  <h3>Some lesson</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod suscipit eaque voluptatem dolorem veniam, accusantium facere at sit minus nihil hic perferendis fugiat laudantium nam illum beatae est ipsam?</p>

</main>
<aside id="aside1">
  <h3>Advertisement/Chat</h3>
</aside>
<footer id="footer">aMuse Developer Team 2021</footer>
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

#main{
margin: 1%;
width: 74%;
min-height: 400px;
float: left;

}
#aside1{
width: 22%;
margin: 1%;
float: left;
min-height: 400px;
background-color: #7dbed6;
border-radius: 10px;
text-align: center;
}
#footer{
  padding: 10px;
  text-align: center;
  clear: both;
  background-color: #333;
  color: white;

}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    border-radius: 10px;
}

li {
    float: right;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #A8B1BF
}

</style>
