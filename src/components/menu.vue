<template>
  <button @click="get()">
    123
  </button>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    get(){
        this.axios.get("https://vue-demo-85ab7.firebaseio.com/posts.json")
        .then(function(data){
          console.log(data.data);
        })
        .catch(function(res){
          console.log(res);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
