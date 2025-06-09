<template>
  <el-button type="primary" @click="useCounter.doubleCount">
    Double count(getter): {{ useCounter.doubleCount }}
  </el-button>
  <el-button @click="useCounter.increment()"> +1 count(state): {{ useCounter.count }} </el-button>
  <div style="background-color: yellow">pinia userdata:{{ store.apiConfiguration }}</div>
  all example data stored in src/stores/counter.js
</template>
<script setup>
import { useCounterStore, userData } from '@/stores/counter'

const useCounter = useCounterStore()
const store = userData()
</script>
