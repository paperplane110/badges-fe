<template>
  <div class="group flex items-center gap-4 p-3 rounded-2xl max-w-150 cursor-pointer hover:(bg-gray-200)" @click="press">
    <div class="pushable">
      <span class="front" :class="status ? 'done' : ''">✓</span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
type krProps = {
  status: string
}
const props = defineProps<krProps>()

const statusColor = computed(() => {
  if (props.status === 'done') return "bg-emerald-400"
  else if (props.status === 'beyond') return "bg-indigo-400"
  else return "bg-gray-400"
})

const status = ref(false)

const press = () => {
  status.value = !status.value
}
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
    transform 150ms cubic-bezier(.3, .7, .4, 2.5);
}

.pushable:active .front {
  transform: translateX(2px) translateY(-2px);
}

.front.done {
  @apply bg-green-500 border-green-700 text-white;
  transform: translateX(2px) translateY(-2px);
}
</style>
