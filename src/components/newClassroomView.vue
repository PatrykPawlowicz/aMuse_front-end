<template>
    <div class="wrapper fadeInDown">
  <div id="formContent">

    <div class="fadeIn first">
      <h1 class="title">New classroom</h1>
    </div>
    <form>
      <input type="text" required v-model="title" id="name" class="fadeIn second" name="newClassroom" placeholder="Enter name">
      <textarea rows="4" cols="50" required v-model="description" id="name" class="fadeIn second" name="newClassroom" placeholder="Enter contents"/>
      <input @click="addClassroom()" type="button" class="fadeIn fourth regBttn" value="Add">
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
      description:''
    }
  },
  
  methods: {
    addClassroom() {
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

        var raw = JSON.stringify({"title":title,"description":description});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://localhost:5001/Classroom", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.success) {
              //alert(result.data[result.data.length-1].id);
              router.push('/classroom/'+result.data[result.data.length-1].id);
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