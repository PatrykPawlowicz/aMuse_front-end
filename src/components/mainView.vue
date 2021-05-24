<template>
   <main id="main">
      <div>
         <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter class name" v-model="searchText">
         </div> 

         <div style="margin-top:30px; text-align:left;">
            <h3>Last created classrooms</h3>
         </div>
         <ul class="list-group"  style="margin-top: 30px;">
            <li class="list-group-item" v-for="classroom in classrooms" v-bind:key="classroom.id" v-bind:name="classroom.title">
                <div style="text-align: left;">
                    <a @click="goToClassroom(classroom)" id="title"><h4>{{classroom.title}}</h4></a>
                </div>
                <div id="description" v-if="classroom.description.length<150">
                    {{classroom.description}}
                </div>
                <div id="description" v-else>
                    {{classroom.description.substring(0,147)+"..."}}
                </div>
            </li> 
         </ul>
      </div>
        
   </main> 
</template>


<style scoped>
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
            console.log(resData.data.slice(-10));
            this.classrooms = resData.data.slice(-10);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    },
    methods:{
        
        goToClassroom(classroom){
            router.push('/classrooms/'+classroom.id)
        }
    }
}
</script>