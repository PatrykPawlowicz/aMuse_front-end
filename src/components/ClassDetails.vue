<template>
<main>
  <!-- <div>
      <a v-for="classroom in classrooms" v-bind:key="classroom.id" v-bind:name="classroom.title" id="title"><h4>{{classroom.title}}</h4></a>
  </div> -->
  <!-- <div>
      <div>
        <ul class="list-group"  style="margin-top: 30px;">
            <li class="list-group-item" v-for="classroom in classrooms" v-bind:key="classroom.id" v-bind:name="classroom.title">
                <div id="title" >
                    <a @click="goToClassroom(classroom)" id="title"><h4>{{classroom.title}}</h4></a>
                </div>
                <div id="description" v-if="classroom.description.length<150">
                    {{classroom.description}}
                </div>
                <div id="description" v-else>
                    {{classroom.description.substring(0,147)+"..."}}
                </div>
                 <div id="buttons">
                <button type="button" class="btn btn-info" style="margin-right:10px;" @click="addLesson(classroom)">Add lesson</button>
                <button type="button" class="btn btn-info" style="margin-right:10px;" href="/classroom/edit/">Edit</button>
                <button type="button" class="btn btn-info" v-on:click="remove(classroom)">Delete</button>
                </div>
            </li> 
        </ul>
        </div>
  </div> -->
  <div>
      <h2 class="title" @bind="getClassroomName(classroom)">New lesson for {{classroomName}}</h2>
     
  </div>
  <div>
        <ul class="list-group"  style="margin-top: 30px;">
      <li class="list-group-item">    
      <input id="show" type="button" @click="ShowClassroom()" class="fadeIn nav-link nav-item" value="Show">
      <input id="addLesson" type="button" @click="addLesson(classroom)" class="fadeIn nav-link nav-item" value="Add lessson +">
      </li>
      </ul>
  </div>
</main> 
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
        .then(result =>  result.json())
        .catch(error => console.log('error', error));
    },

        ShowClassroom(){
            
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
            //console.console.log(this.id);
            fetch("https://localhost:5001/Classroom/"+this.id+"/lessons", requestOptions)
                .then(response => {
                    if(response.status==401)
                        router.push('/login');
                    return response.json()
                    })
                .then(result => this.name = result.data.title)
                .catch(error => console.log('error', error));
        },
        addLesson(classroom){
            router.push('/Classroom/'+classroom.id+'/newLesson');
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
