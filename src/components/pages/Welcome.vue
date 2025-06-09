<template>
  <div class="WelcomePage">
    <h1 class="text-center">ProjectName：</h1>
    <h3>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
    <h3>TestAgent 主要致力于解决以下问题：</h3>
    <h3>
      <el-icon><CaretRight /></el-icon>如何根据特定领域需求，自动构建量身定制的评测基准？
    </h3>
    <h3>
      <el-icon><CaretRight /></el-icon
      >在垂直领域中，如何探索模型的潜力与局限，帮助领域专家更好地理解模型表现？
    </h3>
    <h3>
      <el-icon><CaretRight /></el-icon>如何通过动态交互与自动化验证，提供更全面、细致的评估结果？
    </h3>
    <h3>TestAgent ，提供高效的垂域基准构建与模型动态评估解决方案。能够型评估。</h3>
    <div class="text-center">
      <el-button type="primary" size="large" round @click="start">Start Now</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function start() {
  router.push({ name: 'home' })
}
</script>

<style scoped>
.WelcomePage {
  height: calc(100vh - var(--el-menu-horizontal-height));
  padding: 20vh 10vh;
}
</style>
