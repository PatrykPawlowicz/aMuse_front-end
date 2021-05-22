<template>
    <div id="main">
        <div>
            <input id="addClassroom" type="submit" @click="createClassroom"  class="fadeIn nav-link nav-item" value="Add classroom +"/>
        </div>
        <div>
        <ul class="list-group"  style="margin-top: 30px;">
            <li class="list-group-item" v-for="classroom in classrooms" v-bind:key="classroom.id" v-bind:name="classroom.title">
                <a v-bind:href="'/classrooms/'+classroom.id" id="name" style="text-align:left;"><h4>{{classroom.title}}</h4></a>
                <div style="text-align:right;">
                <button type="button" class="btn btn-info" style="margin-right:10px;" href="/classroom/edit/">Edit</button>
                <button type="button" class="btn btn-info" v-on:click="remove(classroom)">Delete</button>
                </div>
            </li> 
        </ul>
        </div>
    </div>
</template>


<style>
@import url("../main.css");
#addClassroom{
    margin-top: 20px;
}
#name:hover{
text-decoration: none;
}
</style>
<script>
import router from '../router' 
export default {
  components: {  },
    name: 'myClassroomsListView',
    data: function(){
        return {
            classrooms : [
            ],
            
        };
    },
    mounted(){
        fetch("http://localhost:5000/Classroom")
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
                alert("usuwam");
                var index = this.classrooms.indexOf(classroom);
                this.classrooms.splice(index, 1);
            }
        },
        createClassroom(){
            router.push('/classroom/new');
        }
    }
}
</script>