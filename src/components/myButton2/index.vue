<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button class="my-btn" @click="count++">You clicked me {{ count }} times.</button>
</template>

<style scoped>
.my-btn {
  color: red;
}
</style>
