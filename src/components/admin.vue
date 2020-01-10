<template>
    <h1>Admin</h1>
</template>

<script>
export default {
  data () {
    return {
      name:"千里长河"
    }
  },
  beforeRouteEnter: (to, from, next) => {
    // alert("Hello "+this.name);
    // next();
    next(vm =>{
      alert(vm.name+",欢迎回来")
    })
  }
  // beforeRouteLeave:((to, from, next) => {
  //   if(confirm("确定离开吗")==true){
  //     next()
  //   }else{
  //     next(false)
  //   }
    
  // })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
