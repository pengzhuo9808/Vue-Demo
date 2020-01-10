<template>
<div>
  <div class="register" v-if="regshow">
    <h2>注册账号</h2>
    <div class="main">
      <form>
        <div>
          <span class="sp-1">*账号</span>
          <input type="text" placeholder="6~18位字符只能包含字母、数字、下划线" v-model="use.user" @blur="usertest()">
          <img src="../assets/ok.png" v-if="uok"><img src="../assets/err.png" v-if="uerr">
          <span class="tips">{{usertip}}</span>
        </div>
        <div>
          <span class="sp-1">*密码</span>
          <input type="text" placeholder="6~16位字符,可包含字母、数字" v-model="use.pass" @blur="passtest()">
          <img src="../assets/ok.png" v-if="passok"><img src="../assets/err.png" v-if="passerr">
          <span class="tips">{{passtip}}</span>
        </div>
        <div>
          <span class="sp-1">*确认密码</span>
          <input type="text" placeholder="请确认您的密码" v-model="password" @blur="passwordtest()">
          <img src="../assets/ok.png" v-if="passwordok"><img src="../assets/err.png" v-if="passworderr">
          <span class="tips">{{passwordtip}}</span>
        </div>
        <div>
          <span class="sp-1">*手机号</span>
          <input type="text" placeholder="请输入您的手机号" v-model="use.phone" @blur="phonetest()">
          <img src="../assets/ok.png" v-if="phoneok"><img src="../assets/err.png" v-if="phoneerr">
          <span class="tips">{{phonetip}}</span>
        </div>
        <div>
          <span class="sp-1">*邮箱</span>
          <input type="text" placeholder="请输入您的邮箱" v-model="use.mail" @blur="mailtest()">
          <img src="../assets/ok.png" v-if="mailok"><img src="../assets/err.png" v-if="mailerr">
          <span class="tips">{{mailtip}}</span>
        </div>
        <input type="button" @click="sub()" value="立即注册">
      </form>
    </div>
  </div>
  <div v-if="show" class="show">
    <h2>你的账号注册成功</h2>
    <span>{{num}}秒后，将自动进入首页</span>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      use:{
        user:'',
        pass:'',
        phone:'',
        mail:'',
      },
      password:'',
      usertip:'',
      passtip:'',
      passwordtip:'',
      phonetip:'',
      mailtip:'',
      uok:false,
      uerr:false,
      passok:false,
      passerr:false,
      passwordok:false,
      passworderr:false,
      phoneok:false,
      phoneerr:false,
      mailok:false,
      mailerr:false,
      regshow:true,
      show:false,
      num:'3',
      usertst:false,
      passtst:false,
      passwordtst:false,
      phonetst:false,
      mailtst:false,
    }
  },
  methods:{
      usertest(){
        if (this.use.user=='') {
          this.usertip = '用户名不能为空'

          this.uerr=true
          this.uok=false
        } else if (!/^[a-zA-Z0-9_]{6,18}$/.test(this.use.user)){
          this.usertip = '用户名应为6~18位字符只能包含字母、数字、下划线'

          this.uerr=true
          this.uok=false
        } else {
          this.usertip = '账号可以使用'
          this.uok=true
          this.uerr=false
          this.usertst=true
        }
      },
      passtest(){
        if (this.use.pass=='') {
          this.passtip = '密码不能为空'
          this.passerr=true
          this.passok=false
        } else if (!/^[A-Za-z0-9]{6,16}$/.test(this.use.pass)){
          this.passtip = '密码应为6~16位字符只能包含字母、数字'

          this.passerr=true
          this.passok=false
        } else {
          this.passtip = '密码可以使用'
          this.passok=true
          this.passerr=false
          this.passtst=true
        }
      },
      passwordtest(){
        if (this.password=='' || this.password!=this.use.pass) {
          this.passwordtip = '密码不一致'

          this.passworderr=true
          this.passwordok=false
        } else {
          this.passwordtip = '密码正确'
          this.passwordok=true
          this.passworderr=false
          this.passwordtst=true
        }
      },
      phonetest(){
        if (this.use.phone=='') {
          this.phonetip = '请输入手机号'

          this.phoneerr=true
          this.phoneok=false
        } else if (!/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.use.phone)){
          this.phonetip = '电话号码格式错误'

          this.phoneerr=true
          this.phoneok=false
        } else {
          this.phonetip = '手机号可以使用'
          this.phoneok=true
          this.phoneerr=false
          this.phonetst=true
        }
      },
      mailtest(){
        if (this.use.mail=='') {
          this.mailtip = '请输入邮箱'

          this.mailerr=true
          this.mailok=false
        } else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.use.mail)){
          this.mailtip = '邮箱格式错误'
          this.mailerr=true
          this.mailok=false
        } else {
          this.mailtip = '邮箱可以使用'
          this.mailok=true
          this.mailerr=false
          this.mailtst=true
        }
      },
      sub(){
        if(this.usertst == true && this.passtst == true && this.passwordtst == true && this.phonetst == true && this.mailtst == true){
        var _self=this
        this.axios.post("https://vue-demo-85ab7.firebaseio.com/posts.json",this.use)
        .then(function(data){
          console.log(data)
          _self.show=true;
          _self.regshow=false;
          setInterval(() => {
            _self.num -= 1;
          }, 1000);
          setTimeout(function(){
            _self.$router.push('/')}
            ,3000)
        })
        .catch(function(res){
          console.log(res);
        })
        }else{
          alert("账号不规范，请重新输入")
        }
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  position: relative;
  width: 500px;
  height: 700px;
  top: 100px;
  left: 250px;
  border: 1px rgb(34, 80, 99) solid;
  border-radius: 20px;
}
.register > h2{
  position: relative;
  color: rgb(34, 100, 126);
  top: 80px;
  left: 170px;
}
.main{
  position: relative;
  top: 100px;
  left:100px;
}
.sp-1{
  display:block;
  font-size: 20px;
  color: rgb(46, 107, 131);
  text-align: left;
  width: 100px;
}
input[type="text"]{
  width:250px;
  height: 40px;
  border: 2px solid rgb(34, 100, 126);
  outline-style: none;
  outline-style: none;
  border-radius: 5px;
  border-top: none;
  border-right: none;
  border-left: none;
  font-size: 13px;
}
input[type="button"]{
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
form > div{
  margin-bottom: 20px;
}
.tips{
  font-size: 3px;
  width: 300px;
  text-align: left;
}
.show > h2{
  color: rgb(34, 100, 126);
  position: relative;
  top: 300px;
  left: 400px;
  font-size: 40px;
}
.show > span{
  color: rgb(34, 100, 126);
  position: relative;
  top: 350px;
  left: 450px;
  font-size: 20px;
}
</style>
