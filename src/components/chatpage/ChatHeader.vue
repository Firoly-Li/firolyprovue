<template>
   <div class="chatheader">
     <span>{{title}}</span>
   </div>
</template>

<script>
    export default {
        name: "ChatHeader",
        props:['title']
    }
</script>

<style scoped>
  .chatheader{
    /*width: 100px;*/
    height: 45px;
    background-color: aqua;
    align-content: center;
    line-height: 45px;
  }
</style>
