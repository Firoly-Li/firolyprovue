<template>
  <div>
      发送给：<input id="text1" type="text" /><br/>
     发送内容： <input id="text2" type="text" />
      <button v-on:click="sendToSomeone">发送消息</button><br/> <button v-on:click="websocketclose">断开连接</button>
      <div id="message">
      </div>
    </div>
</template>
<script>
  export default {
      data() {
        return {
          websock: null,
        }
      },
      created(){
        //页面刚进入时开启长连接
        this.initWebSocket()
      },
      destroyed: function() {
        //页面销毁时关闭长连接
        this.websocketclose();
      },
      methods: {
        initWebSocket(){ //初始化weosocket
          var url = "localhost";
          var url1 = "192.168.13.189"
          this.websock = new WebSocket("ws://"+url+":8080/websocket/");
          this.websock.onopen = this.websocketonopen;

          this.websock.onerror = this.websocketonerror;

          this.websock.onmessage = this.websocketonmessage;
          this.websock.onclose = this.websocketclose;
        },

        websocketonopen() {
          console.log("WebSocket连接成功");
        },
        websocketonerror(e) { //错误
          console.log("WebSocket连接发生错误");
        },
        websocketonmessage(event){ //数据接收
          alert(event);
          var innerHTML = event.data;
          document.getElementById('message').innerHTML += innerHTML + '<br/>';
        },

        websocketsend(agentData){//数据发送
          this.websock.send(agentData);
        },

        websocketclose(){ //关闭
          this.websock.close();
          console.log("已经断开连接");
        },
        sendToSomeone:function () {
          var userid = document.getElementById("text1").value;
          var message = document.getElementById('text2').value;
          var str = "{\"userid\":"+"\""+userid+"\","+"\"message\":"+"\""+message+"\"}";
          this.websocketsend(str);
        },
        closeWebSocket:function () {
          this.websocketclose();
        }

      }
    }

</script>

<style scoped>
  #sd{
    height: 100%;
    width: 100%;

  }

</style>
