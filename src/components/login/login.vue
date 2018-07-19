<template>
  <div class="container demo-1">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas"></canvas>
        <div class="logo_box" style="text-align: center;">
          <h3>欢迎你</h3>
          <div class="input_outer">
            <input id="uname" class="text" style="color: cyan !important" type="text" placeholder="请输入账号">
          </div>
          <div class="input_outer" >
            <input id="upass" class="text" style="color: cyan !important; z-index:100;"
                   value="" type="password" placeholder="请输入密码">
          </div>
          <div>
            <!--<router-link id="ChatVue" to="/chatvue" v-on:click="fnLogin" class="lb1" style="color: lightblue">登录</router-link>-->
            <button id="ChatVue"  v-on:click="fnLogin" class="lb1" style="color: lightblue">登录</button>
          </div>
          <div>
            <router-link id="regist" to="/regist"class="lb2" style="color: lightblue"><a href="regist.html">注册</a>
            </router-link>
          </div>

          <div>
            <router-link id="blog" to="/blog"  class="lb1" style="color: lightblue">blog</router-link>
            <!--<button id="blog"  v-on:click="fnLogin" class="lb1" style="color: lightblue">blog</button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "login",
        methods: {
          fnLogin: function () {
            var self = this;
            var name = document.getElementById("uname").value;
            var password = document.getElementById("upass").value;
            var url = "http://localhost:8080/user/loginer";
            var json = [];
            var row = {name: name, password: password};
            json.push(row);
            var jsonStr = JSON.stringify(json).replace("[","").replace("]","");
            axios.post(url,jsonStr, {headers:{'Content-Type':'application/json'}}).then((response)=>{
              alert(response.data);
             console.log(response.data);
            })
            setTimeout(function () {
              self.$router.push('/chatvue');
            },1000)
          },
          fnregist: function () {

          },
        }
    }
</script>

<style scoped>

</style>
