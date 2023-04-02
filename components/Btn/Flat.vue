<template>
  <div class="flex items-center p-2 rounded-xl cursor-pointer transition-colors hover:(bg-opacity-80)"
    :class="[props.bgColor, props.textColor]">
    <span class="material-icons">
      {{ props.ficon }}
    </span>
    <slot>Button</slot>
    <span class="material-icons">
      {{ props.ricon }}
    </span>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps<{
  ficon?: string
  ricon?: string
  bgColor: string
  textColor: string
}>()
</script>

<style scoped></style>
