<template>
    <div class="wrapper fadeInDown">
  <div id="formContent">

    <div class="fadeIn first">
      <h1 class="title" v-bind="getClassroomName()">Edit classroom {{classroomName}}</h1>
    </div>
    <form>
      <input type="text" required v-model="title" id="name" class="fadeIn second" name="edittClassroom" placeholder="Enter name">
      <textarea rows="4" cols="50" required v-model="description" id="name" class="fadeIn second" name="editClassroom" placeholder="Enter contents"/>
      <input @click="editClassroom()" type="button" class="fadeIn fourth regBttn" value="Edit">
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
      description:'',
      link:'',
      classroomName:'',
      id:this.$route.params.id
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
    editClassroom() {
        var id = this.id;
        var title = this.title;
        var description = this.description;
        var valid = false;
        var response;
        
        console.log(title + " "+ description);

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

        var raw = JSON.stringify({"id":id,"title":title,"description":description});

        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://localhost:5001/Classroom", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.success) {
              router.push('/classroom/'+result.data.id);
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