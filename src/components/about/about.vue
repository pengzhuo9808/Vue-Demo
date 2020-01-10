<template>
  <div>
      <div class="row mb-5">
        <div class="col-4">
          <div class="list-group mb-5">
            <router-link tag="li" class="nav-link" :to="{name:'historylink'}">
              <a class="list-group-item list-group-item-action" @click="nows(0)" :class="{link:now==0}">历史消息</a>
            </router-link>
            <router-link tag="li" class="nav-link" :to="{name:'contactlink'}">
              <a class="list-group-item list-group-item-action" @click="nows(1)" :class="{link:now==1}">联系我们</a>
            </router-link>
            <router-link tag="li" class="nav-link" :to="{name:'orderinGuidelink'}">
              <a class="list-group-item list-group-item-action" @click="nows(2)" :class="{link:now==2}">文档</a>
            </router-link>
            <router-link tag="li" class="nav-link" :to="{name:'deliverylink'}">
              <a class="list-group-item list-group-item-action" @click="nows(3)" :class="{link:now==3}">进度信息</a>
            </router-link>
          </div>
        </div>
        <div class="col-8">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      now:0,
    }
  },
  methods:{
    nows(a){
      console.log(a)
      this.now=a
      console.log(this.a)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .link{
    background: #cccccc;
  }
</style>
