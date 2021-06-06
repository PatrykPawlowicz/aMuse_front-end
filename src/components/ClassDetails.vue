<template>
<main>
    <div>
      <h2 class="title" v-bind="getClassroomName()">Classroom: {{classroomName}}</h2>
     
  </div>
    <ul class="list-group"  style="margin-top: 30px;">

<!-- 1. Trzeba pozmieniać nazwy parametrów, bo są classroom, powinny być lesson.  -->

            <li class="list-group-item" v-for="classroom in classrooms" v-bind:key="classroom.id" v-bind:name="classroom.title">
                <div id="title" >
                    <a @click="goToLesson(classroom)" id="title"><h4>{{classroom.title}}</h4></a>
                </div>
                <div id="description" v-if="classroom.description">
                    {{classroom.description}}
                </div>
                <div id="description" v-else>
                    {{classroom.description}}
                </div>
                <div id="buttons">
                <button type="button" class="btn btn-info" style="margin-right:10px;" @click="goToLesson(classroom)">Show details</button>
                <button type="button" class="btn btn-info" style="margin-right:10px;" @click="editLesson(classroom)">Edit</button>
                <button type="button" class="btn btn-info" @click="remove(classroom)">Delete</button>
                </div>
            </li> 
        </ul>
  
  <div>
      <input id="addLesson" type="button" @click="addLesson(classroom)" class="fadeIn nav-link nav-item" value="Add lessson +">
  </div>
</main> 
</template>

<script>
import router from '../router' 
export default {
    
  data() {
    return {
      description:'',
      link:'',
      id:this.$route.params.id,
      classroomName:'',
      classrooms : []
      
    }
  },
  


    mounted(){
         var myHeaders = new Headers();
            if (!localStorage.getItem('user-token'))
          router.push('/login');
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('user-token'));
        myHeaders.append("Content-Type", "application/json");

         var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

        fetch("https://localhost:5001/Classroom/"+this.id+"/lessons", requestOptions)
        .then(response => {
            return response.json();
        })
        .then(resData => {
            //console.log(resData);
            this.classrooms = resData.data;
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    },


  methods: {
    getClassroomName(){
        
       var myHeaders = new Headers()
      if (!localStorage.getItem('user-token'))
          router.push('/login');
      myHeaders.append("Authorization", "Bearer " +  localStorage.getItem('user-token'));


      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://localhost:5001/Classroom/"+this.id, requestOptions)
        .then(response => response.json())
        .then(result => this.classroomName = result.data.title)
        .catch(error => console.log('error', error));
    },

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

          fetch("https://localhost:5001/Lesson/"+classroom.id, requestOptions)
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

     goToLesson(lesson){
            router.push('/Lesson/'+lesson.id)
        },

        editLesson(lesson){
            router.push('/lesson/'+lesson.id+'/edit')
        },
  
      
        addLesson(){
            router.push('/Classroom/'+this.id+'/newLesson');
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
