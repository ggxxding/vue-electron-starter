<template>
  <div class="main-container">
    <el-container style="height: 100%">
      <el-aside width="200px">
        <BaseSide></BaseSide>
      </el-aside>

      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import BaseSide from '@/components/layouts/BaseSide.vue'
</script>

<style scoped>
.main-container {
  height: calc(100vh - var(--el-menu-item-height) - 4px);
}
</style>
