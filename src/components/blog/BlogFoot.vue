<template>
  <div class="blogfoot">
    <div class="footimg">
      <div class="footcell">
        <img src="../../assets/blogfoot/home.png" height="24" width="24"/>
      </div>
      <div class="footcell">
        <img src="../../assets/blogfoot/msg.png" height="24" width="24"/>
      </div>
      <div class="footcell">
        <img src="../../assets/blogfoot/search.png" height="24" width="24"/>
      </div>
      <div class="footcell">
        <img src="../../assets/blogfoot/me.png" height="24" width="24"/>
      </div>
    </div>
    <div class="foottxt">
      <span>首页</span>
      <span>消息</span>
      <span>搜索</span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogFoot"
  }
</script>

<style scoped>
  .blogfoot {
    position: fixed;
    width: 100%;
    height: 45px;
    background-color: aqua;
    align-content: center;
    line-height: 45px;
    bottom: 0px;
  }
  .footimg {

    width: 100%;
    height: 27px;
    background-color: aqua;
    align-content: center;
    line-height: 27px;

  }
  .foottxt {

    width: 100%;
    height: 18px;
    background-color: aqua;
    align-content: center;
    line-height: 18px;

  }

  .footcell {
    width: 25%;
    height: 27px;
    float: left;
    text-align: center;

  }

  img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }

  span {
    float: left;
    width: 25%;
    display: block;
    height: 24px;
    font-size: 10px;
  }
</style>
