<template>
  <div class="login">
    <a class="py-2" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
    </a>
    <h2>登录账号</h2>
    <div class="main">
      <form>
        <div class="user">
          <span class="sp-1">*账号</span>
          <input type="text" v-model="account.user"><br>
        </div>
        <div class="word">
          <span class="sp-1">*密码</span>
          <input type="password" v-model="account.pass"><br>
        </div>
        <div class="auth">
          <span class="sp-1">*验证码</span>
          <input type="text" class="code" v-model="account.ccode">
          <span @click='restcode()' class="show">{{code}}</span>
        </div>
        <div>
          <input type="submit" value="登录" @click="sub()"> 
        </div>
        <div class="div-1">
          <input type="checkbox">
          <span>记住密码</span>
          <router-link to="/register" class="reg">注册</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account:{
        user:'',
        pass:'',
        ccode:'',
      },
      code:'',
    }
  },
  methods:{
    getCode(){
      const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      let ccode = ''
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * 36)
        ccode += random[index]
      }
      this.code = ccode
    },
    restcode(){
      this.getCode()
    },
    sub(){
      let ccode = this.account.ccode
      ccode = ccode.toUpperCase()
      let code = this.code
      code = code.toUpperCase()
      if (ccode !== code) {
        alert("验证码错误")
      } else {
        this.axios.post()
      }
    },
    deg(){
      let svg=document.getElementsByClassName('py-2')
    }
  },
  mounted(){
     this.getCode()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  position: relative;
  width: 500px;
  height: 700px;
  top: 100px;
  left: 250px;
  border: 1px rgb(34, 80, 99) solid;
  border-radius: 20px;
}
svg{
  margin-top: 50px;
}
h2{
  position: relative;
  color: rgb(34, 100, 126);
  top: 50px;
  left: 190px;
}
.main{
  position: relative;
  top: 100px;
  left:130px;
}
.user{
  margin-bottom: 30px;
}
input[type="text"],[type="password"]{
  width:250px;
  border: 2px solid rgb(17, 68, 88);
  outline-style: none;
  outline-style: none;
  border-radius: 5px;
  border-top: none;
  border-right: none;
  border-left: none;
}
.sp-1{
  display:block;
  font-size: 20px;
  color: rgb(46, 107, 131);
  text-align: left;
  width: 100px;
}
input[type="submit"]{
  margin:30px 70px 0px 0px;
  text-align: center;
  height: 40px;
  width: 270px;
  padding: 5px;
  border-radius: 15px;
  outline-style: none;
  background: crimson;
  color: #eee;
}
input[type="checkbox"]{
  width: 15px;
  height: 15px;
  border-radius: 5px;
}
.word{
  margin-bottom: 30px;
}
.auth > .code{
  width: 195px;
}
.show{
  display: inline-block;
  font-size: 20px;
  text-align:center;
  background: rgb(158, 156, 156);
  width: 60px;
}
.reg{
  margin-left: 120px;
}
.div-1{
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
