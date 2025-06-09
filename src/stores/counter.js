import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const userData = defineStore('userData', () => {
  const url = ref('http://localhost:3000')
  const apiConfiguration = ref({
    address: '192.168.71.31',
    port: '60604',
    username: 'ubuntu',
    password: 'ubuntu',
    form: {
      example: '111',
      example2: 222,
    },
  })
  return { url, apiConfiguration }
})
