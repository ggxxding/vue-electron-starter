<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
    <el-menu-item index="/">
      <img style="width: 60px" src="@/assets/logo.svg" alt="Element logos" />
      <h1>Project</h1>
    </el-menu-item>

    <el-menu-item @click="openUrl('https://arxiv.org/abs/2410.11507')">
      Link<el-icon><Link /></el-icon>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Link } from '@element-plus/icons-vue'
const openUrl = (url) => {
  // open external browser, only worked in electron
  // send url to API in  preload.js
  window.electronAPI.openUrl(url)
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
