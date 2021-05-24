<template>
    <div id="main">
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
        <div>
            <input id="addClassroom" type="submit" @click="createClassroom"  class="fadeIn nav-link nav-item" value="Add classroom +"/>
        </div>
    </div>
</template>


<style>
@import url("../main.css");
#addClassroom{
    margin-top: 20px;
}
#title:hover{
    text-decoration: none;
}
#title{
    text-align:left;
}
#buttons{
    text-align:right;
}
#description{
    text-align: justify;
}
</style>
<script>
import router from '../router' 
export default {
  components: {  },
    name: 'myClassroomsListView',
    data: function(){
        return {
            classrooms : [],
        };
    },
    mounted(){
        fetch("https://localhost:5001/Classroom")
        .then(response => {
            return response.json();
        })
        .then(resData => {
            console.log(resData);
            this.classrooms = resData.data;
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    },
    methods:{
        remove:function(classroom){
            var confirmed=confirm("Do you want to remove "+classroom.name+"?");
            if(confirmed){
                alert("Delete completed");
                var index = this.classrooms.indexOf(classroom);
                this.classrooms.splice(index, 1);
            }
        },
        createClassroom(){
            router.push('/classroom/new');
        },
        addLesson(classroom){
            router.push('/classroom/'+classroom.id+'/newLesson');
        },
        goToClassroom(classroom){
            router.push('/classrooms/'+classroom.id)
        }
    }
}
</script>