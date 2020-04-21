<template>
    <div class="navbar">
        <el-menu
                :router="true"
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="/home">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/point">
                <i class="el-icon-s-home"></i>
                <span slot="title">WebGL实现绘制点</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped>
    .el-menu-vertical-demo {
        border: none;
    }
</style>
