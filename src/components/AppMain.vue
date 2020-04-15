<template>
  <div class="main">
    <app-link></app-link>
    <router-view></router-view>
  </div>
</template>

<script>
import AppLink from "./Line.vue";
import "../lib/webgl-utils";
import "../lib/webgl-debug";
import "../lib/cuon-utils";
export default {
  components: {
    AppLink
  }
};
</script>

<style scoped>
</style>