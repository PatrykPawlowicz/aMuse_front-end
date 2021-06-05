<template>
<main>
    <!-- 1. Wypisać lekcję (description oraz osadzić link z yt. 2. Myślałem nad funkcją back, jednak nie wiem jak wziąć id od \
    classroma, bo to id to id lekcji) -->
    <div>
      <h2 class="title" v-bind="getLessonName()">Lesson: {{lessonName}}</h2>
  </div>
   <div>
    <input id="addClassroom" type="submit" @click="back()"  class="fadeIn nav-link nav-item" value="Back"/>
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
      lessonName:'',
      
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

        fetch("https://localhost:5001/Lesson/"+this.id, requestOptions)
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


  methods: {
      
     
         
      
    getLessonName(){
        
       var myHeaders = new Headers()
      if (!localStorage.getItem('user-token'))
          router.push('/login');
      myHeaders.append("Authorization", "Bearer " +  localStorage.getItem('user-token'));


      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://localhost:5001/Lesson/"+this.id, requestOptions)
        .then(response => response.json())
        .then(result => this.lessonName = result.data.title)
        .catch(error => console.log('error', error));
    },

     back(classroom){
            router.push('/Classroom/'+classroom.id)
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
