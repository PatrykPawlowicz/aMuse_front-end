<template>
    <div class="wrapper fadeInDown">
  <div id="formContent">

    <div class="fadeIn first">
      <h1 class="title" v-bind="getLessonName()">Edit lesson {{lessonName}}</h1>
    </div>
    <form>
      <input type="text" required v-model="title" id="name" class="fadeIn second" name="register" placeholder="Enter name">
      <textarea rows="4" cols="50" required v-model="description" id="name" class="fadeIn second" name="newLesson" placeholder="Enter contents"/>
      <input type="text" required v-model="ytLink" id="name" class="fadeIn second" name="register" placeholder="Put the TouTube link here">
      <input @click="editLesson()" type="button" class="fadeIn fourth regBttn" value="Edit">
    </form>
  </div>
</div>
</template>


<script>
import router from '../router' 
export default {
  data() {
    return {
      title:'',
      text:'',
      ytLink:'',
      lessonName:'',
      id:this.$route.params.id
    }
  },
  
  methods: {
    getLessonName(){
      var myHeaders = new Headers();
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
    editLesson() {
        var id = this.id;
        var title = this.title;
        var text = this.text;
        var ytLink = this.ytLink.replace("watch?v=","embed/");
        var valid = false;
        var response;
        
        console.log(title + " "+ text + " " + ytLink);

        if(title.length<3 ){
        alert("Enter the correct data");
        valid = false;
        }else{
        valid = true;
        }
      console.log(valid);
        if(valid){
        var myHeaders = new Headers();
        if (!localStorage.getItem('user-token'))
          router.push('/login');
        myHeaders.append("Authorization", "Bearer " +  localStorage.getItem('user-token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"id":id,"title":title,"text":text, "ytLink":ytLink,});

        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://localhost:5001/Lesson", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.success) {
              router.push('/Lesson/'+result.data.id);
            }
            else
              alert(response.message);
            })
          .catch(error => console.log('error', error));

        
        
         }
     },  
  },
}
</script>

<style>
@import url("../main.css");
</style>