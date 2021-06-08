<template>
    <div class="wrapper fadeInDown">
  <div id="formContent">

    <div class="fadeIn first">
      <h1 class="title" v-bind="getClassroomName()">New lesson for {{classroomName}}</h1>
    </div>
    <form>
      <input type="text" required v-model="title" id="name" class="fadeIn second" name="newLesson" placeholder="Enter title">
      <textarea rows="4" cols="50" required v-model="description" id="name" class="fadeIn second" name="newLesson" placeholder="Enter contents"/>
      <input type="text" required v-model="link" id="name" class="fadeIn second" name="newLesson" placeholder="Enter YouTube link">
      <input @click="addLesson()" type="button" class="fadeIn fourth regBttn" value="Add">
    </form>
  </div>
</div>
</template>


<script>
import router from '../router' 
export default {
  props: ['id'],
  
  data() {
    return {
      title:'',
      description:'',
      link:'',
      classroomName:''
    }
  },
  
  methods: {
    getClassroomName(){
      var myHeaders = new Headers();
      if (!localStorage.getItem('user-token'))
          router.push('/login');
      console.log(localStorage.getItem('user-token'))
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

    addLesson() {
        var title = this.title;
        var description = this.description;
        var link = this.link.replace("watch?v=","embed/");
        var valid = false;
        
        if(title.length<3 ){
        alert("Enter the correct data");
        valid = false;
        }else{
        valid = true;
        }

        if(valid){
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer " + localStorage.getItem('user-token'));
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({"title":title,"text":description,"ytLink":link});

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("https://localhost:5001/Classroom/"+this.id, requestOptions)
            .then(response => {
              if(response.status==401)
                router.push('/login');
              return response.json()
            })
            .then(result => {
              if(result.success) {
                //alert("created lessson with id "+result.data.id);
                router.push('/classroom/'+this.id);
              }
              else
                router.push('/classroom/'+this.id);
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