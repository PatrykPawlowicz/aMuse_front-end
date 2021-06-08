<template>
<main>
    <div>
      <h2 class="title" v-bind="getClassroomName()">Classroom: {{classroomName}}</h2>
     
  </div>
    <ul class="list-group"  style="margin-top: 30px;">
            <li class="list-group-item" v-for="lesson in lessons" v-bind:key="lesson.id" v-bind:name="lesson.title">
                <div id="title" >
                    <a @click="goToLesson(lesson)" id="title"><h4>{{lesson.title}}</h4></a>
                </div>
                <div id="description">
                    {{lesson.description}}
                </div>
                <div id="buttons">
                <button type="button" class="btn btn-info" style="margin-right:10px;" @click="goToLesson(lesson)">Show details</button>
                <button type="button" class="btn btn-info" style="margin-right:10px;" v-if="myClass" @click="editLesson(lesson)">Edit</button>
                <button type="button" class="btn btn-info" v-if="myClass" @click="remove(lesson)">Delete</button>
                </div>
            </li> 
        </ul>
  
  <div>
      <input id="addLesson" type="button" v-if="myClass" @click="addLesson(lesson)" class="fadeIn nav-link nav-item" value="Add lessson +">
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
      lessons : [],
      myClass: ''
    }
  },
  


    mounted(){
       this.getLessons()
       this.getClassroomAuthor()
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

    remove:function(lesson){
            var confirmed=confirm("Do you want to remove "+lesson.title+"?");
            if(confirmed){
                var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer " + localStorage.getItem('user-token'));
          myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            }

          fetch("https://localhost:5001/Lesson/"+lesson.id, requestOptions)
            .then(response => {
              if(response.status==401)
                router.push('/login');
              return response.json()
            })
            .then(result => {
              if(result.success) {
                alert("Delete succesfull");
                var index = this.classrooms.indexOf(lesson);
                this.classrooms.splice(index, 1);
              }
                else
                alert("Unable to delete lesson.")
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

      getClassroomAuthor(){
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
            resData.data.forEach(element => {
              if(element.id == this.id){
                this.myClass = true;
              }
            });
        })
        .catch((error) => {
        console.error('Error:', error);
        });
      },

      getLessons(){
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
            this.lessons = resData.data;
        })
        .catch((error) => {
        console.error('Error:', error);
        });
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
