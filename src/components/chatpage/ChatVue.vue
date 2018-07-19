<template>
  <div>
    <chat-header :title="header"></chat-header>
    <chat-box></chat-box>
  </div>

</template>

<script>
  import ChatHeader from './ChatHeader'
  import ChatBox from "./ChatBox";
  export default {
    components: {ChatBox, ChatHeader},
    data(){
      return {
        header:"聊天"
      }
    }
  }




</script>

<style scoped>

  #sd{
      margin-top: 60px;
  }




</style>
