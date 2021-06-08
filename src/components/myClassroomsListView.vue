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
                <button type="button" class="btn btn-info" style="margin-right:10px;" @click="editClassroom(classroom)">Edit</button>
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
          if (!localStorage.getItem('user-token'))
            router.push('/login');

          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer " + localStorage.getItem('user-token'));
          myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            }

        fetch("https://localhost:5001/Classroom/my", requestOptions)
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
            var confirmed=confirm("Do you want to remove "+classroom.title+"?");
            if(confirmed){
                var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer " + localStorage.getItem('user-token'));
          myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            }

          fetch("https://localhost:5001/Classroom/"+classroom.id, requestOptions)
            .then(response => {
              if(response.status==401)
                router.push('/login');
              return response.json()
            })
            .then(result => {
              if(result.success) {
                alert("Delete succesfull");
                var index = this.classrooms.indexOf(classroom);
                this.classrooms.splice(index, 1);
              }
                else
                alert("The class is not empty. Delete all lessons to delete a class")
            })
            .catch(error => console.log('error', error));
            }
            
           
        },
        createClassroom(){
            router.push('/classroom/new');
        },
        addLesson(classroom){
            router.push('/classroom/'+classroom.id+'/newLesson');
        },
        goToClassroom(classroom){
            router.push('/classroom/'+classroom.id)
        },
        editClassroom(classroom){
            router.push('/classroom/'+classroom.id+'/edit')
        }
    }
}
</script>

<style>
@import url("../main.css");
#addClassroom{
    margin-top: 20px;
}
#title:hover{
    cursor: pointer;
}
#title{
    text-align:left;
    font-weight: bold;
    color: #17a2b8;
}
#buttons{
    text-align:right;
}
#description{
    text-align: justify;
}
</style>
