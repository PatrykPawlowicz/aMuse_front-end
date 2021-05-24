<template>
<main>
  <div>
    <!-- <h2  v-bind="getClassroomName()">{{classroomName}}</h2> -->
    <h2>classroom name</h2>
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
export default {
    props: ['id'],

    data(){
        return {
            classroomName:''
        }
    },
    methods: {
        // getClassroomName(){
        //     var myHeaders = new Headers();
        //     myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJtYXJjaW4iLCJuYmYiOjE2MjE3OTk2MzIsImV4cCI6MTYyMTg4NjAzMiwiaWF0IjoxNjIxNzk5NjMyfQ.DjOi93GLdxsNlHpCerc3Jyp2EHOpca5asNQbY6nZZlla7-DENVsDiDzQgz0fo5glmAqfT2oZjih4pVnnkOSkqQ");

        //     var requestOptions = {
        //         method: 'GET',
        //         headers: myHeaders,
        //         redirect: 'follow'
        //     };
        //     //console.console.log(this.id);
        //     fetch("http://localhost:5000/Classroom/"+this.id, requestOptions)
        //         .then(response => {
        //             if(response.status==401)
        //                 router.push('/login');
        //             response.json()
        //             })
        //         .then(result => this.classroomName = result.data.title)
        //         .catch(error => console.log('error', error));
        // },
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
