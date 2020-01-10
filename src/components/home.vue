<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎</h1>
        <h2>这里有你想要的东西</h2>
        <button @click="goToMenu" class="btn btn-success">开始进入</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goToMenu(){
    // this.$router.go(-1)
    // 跳转到上一个页面
    // this.$router.repalce('/menu')
    this.$router.push('/menu')
    // 指定跳转页面
    }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  background: url('../../src/assets/780.jpg');
  height: 85vh;
  padding:10%;
  background-repeat: no-repeat;
  background-size: 1000px 666px;
  background-position-x: 70px;
  background-position-y: 50px;
}
h1,h2{
  margin: 6%;
}
.background{
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
