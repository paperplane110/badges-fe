<template>
  <div class="group flex items-center gap-4 p-3 rounded-2xl max-w-150 cursor-pointer hover:(bg-gray-200)" @click="press">
    <div class="pushable">
      <span class="front" :class="props.status">✓</span>
    </div>
    {{ props.contents }}
  </div>
</template>

<script setup lang='ts'>
const store = useStore()

type krProps = {
  pIdx: number
  idx: number
  contents: string
  status: string
}
const props = defineProps<krProps>()

const press = () => {
  // change status
  const cur = store.projectList[props.pIdx].krList[props.idx].status
  if (cur === 'undone') {
    store.changeKrStatus(props.pIdx, props.idx, 'done')
  } else {
    store.changeKrStatus(props.pIdx, props.idx, 'undone')
  }
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
