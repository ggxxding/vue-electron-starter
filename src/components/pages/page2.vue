<template>
  <div style="background-color: yellow">pinia data:{{ store.apiConfiguration }}</div>
</template>
<script setup>
import { userData } from '@/stores/counter'

const store = userData()
</script>
