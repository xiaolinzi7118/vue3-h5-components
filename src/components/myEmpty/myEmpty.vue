<template>
  <Empty v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Empty>
</template>

<script setup>
import { Empty } from 'vant';
</script>