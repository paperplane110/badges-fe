<template>
  <div class="pushable">
    <span class="front">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.pushable {
  @apply bg-gray-500 rounded-lg p-0 cursor-pointer;
  outline-offset: 4px;
}

.front {
  @apply block py-1 px-2 rounded-lg border border-gray-500 bg-gray-200 text-gray-500 font-bold select-none;
  transform: translateX(0px) translateY(-4px);
  transition:
    transform 150ms cubic-bezier(.3, .7, .4, 2.5);
}

.pushable:active .front {
  transform: translateX(0px) translateY(-2px);
}
</style>
