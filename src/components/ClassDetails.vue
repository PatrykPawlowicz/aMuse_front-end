<template>
<main>
  <div>
      <a v-for="classroom in classrooms" v-bind:key="classroom.id" v-bind:name="classroom.title" id="title"><h4>{{classroom.title}}</h4></a>
    <!-- <h2  v-bind="getClassroomName()">{{classroomName}}</h2> -->
    <h2>classroom name</h2>
  </div>
  <div>
      <div>
        <ul class="list-group"  style="margin-top: 30px;">
            <li class="list-group-item" v-for="classroom in classrooms" v-bind:key="classroom.id" v-bind:name="classroom.title">
                <div id="title" >
                    <a @click="goToClassroom(classroom)" id="title"><h4>{{classroom.title}}</h4></a>
                </div>
                <div id="description" v-if="classroom.description.length<150">
                    {{classroom.description}}
                </div>
                <div id="description" v-else>
                    {{classroom.description.substring(0,147)+"..."}}
                </div>
                <div id="buttons">
                <button type="button" class="btn btn-info" style="margin-right:10px;" @click="addLesson(classroom)">Add lesson</button>
                <button type="button" class="btn btn-info" style="margin-right:10px;" href="/classroom/edit/">Edit</button>
                <button type="button" class="btn btn-info" v-on:click="remove(classroom)">Delete</button>
                </div>
            </li> 
        </ul>
        </div>
  </div>
  <div>
      <input id="addLesson" type="button" @click="addLesson(classroom)" class="fadeIn nav-link nav-item" value="Add lessson +">
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
        getClassroomName(){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJtYXJjaW4iLCJuYmYiOjE2MjE3OTk2MzIsImV4cCI6MTYyMTg4NjAzMiwiaWF0IjoxNjIxNzk5NjMyfQ.DjOi93GLdxsNlHpCerc3Jyp2EHOpca5asNQbY6nZZlla7-DENVsDiDzQgz0fo5glmAqfT2oZjih4pVnnkOSkqQ");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            //console.console.log(this.id);
            fetch("http://localhost:5000/Classroom/"+this.id, requestOptions)
                .then(response => {
                    if(response.status==401)
                        router.push('/login');
                    return response.json()
                    })
                .then(result => this.classroom.name = result.data.title)
                .catch(error => console.log('error', error));
        },
        addLesson(classroom){
            router.push('/Classroom/'+classroom.id+'/newLesson');
        },

    }
}

</script>

<style>
@import url("../main.css");
#addLesson{
    margin-top: 50px;
}
</style>
