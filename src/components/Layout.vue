<template>
  <div>
    <app-header></app-header>
    <app-left></app-left>
    <app-main></app-main>
  </div>
</template>

<script>
import appHeader from "./AppHeader.vue";
import appLeft from "./AppLeft.vue";
import appMain from "./AppMain.vue";
export default {
  components: {
    appHeader,
    appLeft,
    appMain
  }
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  background: #2d3a4b;
  line-height: 50px;
}
.navbar {
  position: absolute;
  top: 60px;
  left: 0px;
  width: 240px;
  height: 100%;
  background: #545c64;
  overflow-y: auto;
}
.main {
  position: absolute;
  left: 240px;
  right: 0px;
  top: 60px;
  bottom: 0px;
  overflow-y: auto;
}
</style>