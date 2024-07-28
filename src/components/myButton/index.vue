<template>
  <Button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Button>
</template>

<script setup>
import { Button } from 'vant';
</script>