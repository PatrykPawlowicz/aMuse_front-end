<template>
    <div>
        <img id="errPg" src="../assets/404.jpg" alt="Error 404 - page not found"  />
    </div>
    <input @click="backHome" type="submit"  value="Back to Home">
</template>
<script>
import router from '../router'
export default {
    name: '404errorPage',
    methods: {
        backHome(){

    router.push('/')

    }
    },
}
</script>
<style>
@import url("../main.css");
#errPg{
    width: 40%;
    height: 40%;
}




</style>
    
