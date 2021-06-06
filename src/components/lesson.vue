<template>
<main>
    <div>
      <h2 class="title" v-bind="getLessonName()">Lesson: {{lessonName}}</h2>
  </div>
  <div>
    <p v-bind="getLessonName()">{{lessonText}}</p>
  </div>
  <div v-bind="getLessonName()">
    <iframe :src="ytLink" frameborder="0" width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      ytLink:URL,
      id:this.$route.params.id,
      lessonName:'',
      lessonText:'',
      
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
        .then(result =>{ this.lessonName = result.data.title
         this.lessonText = result.data.text
         this.ytLink = result.data.ytLink
         })

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
