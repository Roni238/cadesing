<template>
  <svg :class="icon + '-icon'">
    <use :xlink:href="`/icons.svg#${icon}`"></use>
  </svg>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>
