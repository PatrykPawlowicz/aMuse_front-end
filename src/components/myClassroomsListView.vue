<template>
    <div id="main">
    <a href="/classroom/new"><button type="button" class="btn btn-info">New classroom</button></a>
    <ul class="list-group"  style="margin-top: 30px;">
        <li class="list-group-item" v-for="classroom in classrooms" v-bind:key="classroom.id" v-bind:name="classroom.name">
            <a v-bind:href="'/classrooms/'+classroom.id" id="name" style="text-align:left;"><h4>{{classroom.name}}</h4></a>
            <div style="text-align:right;">
            <button type="button" class="btn btn-info" style="margin-right:10px;" href="/classroom/edit/">Edit</button>
            <button type="button" class="btn btn-info" v-on:click="remove(classroom)">Delete</button>
            </div>
        </li> 
    </ul>
    </div>
</template>

<style>
#main{
margin: 1%;
width: 74%;
min-height: 500px;
float: left;
}
#name:hover{
text-decoration: none;
}
</style>
<script>
export default {
  components: {  },
    name: 'myClassroomsListView',
    data: function(){
        return {
            classrooms : [
                {id: 1, name: "classroom 1"},
                {id: 2, name: "classroom 2"},
                 {id: 2, name: "classroom 2"}, {id: 2, name: "classroom 2"}, {id: 2, name: "classroom 2"}, {id: 2, name: "classroom 2"}, {id: 2, name: "classroom 2"}, {id: 2, name: "classroom 2"}, {id: 2, name: "classroom 2"}, {id: 2, name: "classroom 2"},
                {id: 3,name: "classroom 3"}
            ]
        };
    },
    methods:{
        remove:function(classroom){
            var confirmed=confirm("Do you want to remove "+classroom.name+"?");
            if(confirmed){
                alert("usuwam");
                var index = this.classrooms.indexOf(classroom);
                this.classrooms.splice(index, 1);
            }
        }
    }
}
</script>

<style scoped>
.delete-btn {
    padding: 0.5em 1em;
    background-color: #eccfc9;
    color: #c5391a;
    border: 2px solid #ea3f1b;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
}
</style>