<template>
  <div id="app">
    <div class="container">
      <appheader></appheader>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
  </div>
</template>

<script>
import appheader from "./components/header"
export default {
  components:{
    appheader,
  }
}
</script>

<style>

</style>
