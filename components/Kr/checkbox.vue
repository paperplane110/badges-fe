<template>
  <div class="pushable">
    <span class="front" :class="status ? 'done' : ''" @click="press">✓</span>
  </div>
</template>

<script setup lang='ts'>
const status = ref(false)

const press = () => {
  status.value = !status.value
}
// const props = defineProps<{
//   status: boolean
// }>()
</script>

<style scoped>
.pushable {
  @apply bg-gray-500 rounded-lg p-0 cursor-pointer;
  outline-offset: 4px;
}

.front {
  @apply block py-1 px-2 rounded-lg border border-gray-500 bg-gray-200 text-gray-500 font-bold select-none;
  transform: translateX(4px) translateY(-4px);
  transition:
    transform 200ms cubic-bezier(.3, .7, .4, 1.5);
}

.pushable:active .front {
  transform: translateX(0px) translateY(-0px);
}

.front.done {
  @apply bg-green-500 border-green-700 text-white;
  transform: translateX(2px) translateY(-2px);
}
</style>
