<template>
  <button class="flex justify-center items-center p-1 rounded-1 transition-colors hover:(bg-gray-200)">
    <span class="material-icons">
      {{ props.icon }}
    </span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()
</script>
