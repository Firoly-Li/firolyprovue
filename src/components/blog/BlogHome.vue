<template>
  <div class="bloghome">
    <blog-header></blog-header>
    <div class="blogmsg" v-for="item in data">
      <div class="msgcell">Title:<span>{{item.title}}</span></div>
      <div class="msgcell">Author:<span>{{item.author}}</span></div>
      <div class="msgcell">Tag:<span>{{item.tags}}</span></div>
      <div class="msgcell">Msg:<span>{{item.messge}}</span></div>
    </div>
    <blog-foot></blog-foot>
  </div>
</template>

<script>
  import BlogHeader from "./BlogHeader";
  import BlogFoot from "./BlogFoot";
  import axios from 'axios'

  export default {
    name: "BlogHome",
    data(){
      return {
        data:""
      }
    },
    components: {BlogFoot, BlogHeader},
    beforeCreate: function () {
      var that = this;
      var url = "http://localhost:8080/blog/getAllBlogs";
      axios.get(url, {headers: {'Content-Type': 'application/json'}}).then((response) => {
        that.data = response.data;
        console.log(that.data);
      })
    },

  }
</script>

<style scoped>
  .bloghome {
    height: 100%;
    width: 100%;
  }

  .blogmsg {
    height: 100px;
    width: 100%;
    background-color: aquamarine;
  }

  .msgcell {
    height: 20px;
    margin-top: 5px;
  }

  span {
    display: block;
    float: left;
    /*background-color: red;*/
  }

</style>
