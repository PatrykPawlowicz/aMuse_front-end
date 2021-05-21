<template>
<main id="main">
  <div>
    <h2>Name of class</h2>
  </div>
  <div>
      LIST OF LESSONS
  </div>
  <div>
      <input id="addLesson" type="submit" @click="CreateLesson" class="fadeIn nav-link nav-item" value="Add lessson +">
  </div>
</main> 
</template>

<script>
import router from '../router' 
export default{

methods: {
    CreateLesson(){

router.push('ODNOSNIK DO CREATE LESSON')

    }
},

}

</script>

<style>
@import url("../main.css");
#addLesson{
    margin-top: 50px;
}
</style>
