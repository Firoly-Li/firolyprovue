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
          <div class="input_outer" >
            <input id="upass1" class="text" style="color: cyan !important; z-index:100;"
                   value="" type="password" placeholder="请再次输入密码">
          </div>
          <div>
            <button id="regist"  v-on:click="fnregist" class="lb2" style="color: lightblue"><a>注册</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "regist",
        methods:{
          fnregist:function () {
            var self = this;
            var name = document.getElementById("uname").value;
            var password = document.getElementById("upass").value;
            var password1 = document.getElementById("upass1").value;
            if(password == password1){
              var url = "http://localhost:8080/user/register";
              var json = [];
              var row = {name: name, password: password};
              json.push(row);
              var jsonStr = JSON.stringify(json).replace("[","").replace("]","");
              axios.post(url,jsonStr, {headers:{'Content-Type':'application/json'}}).then((response)=>{
                alert(response.data.msg);
              })
              setTimeout(function () {
                self.$router.push("/");
              },1000);
            }else {
              alert("两次密码不同，请重新输入密码");
            }
          }
        }
    }
</script>

<style scoped>

</style>
