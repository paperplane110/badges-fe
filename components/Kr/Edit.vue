<template>
  <div class="flex justify-between items-center gap-4 px-3 py-2 rounded-2xl max-w-150">
    <div class="flex-1">
      <input
        class="p-2 w-full outline-none rounded-xl border-2 border-gray-200 transition-colors hover:(border-black) focus:(border-black)"
        :placeholder="props.contents ? props.contents : 'Please enter a new Key Result'"
        v-model="store.projectList[props.pIdx].krList[props.index].contents" />
    </div>
    <div class="flex">
      <BtnIcon class="text-gray-500 hover:(text-gray-700)" @click.stop="moveUpKr" icon="expand_less"></BtnIcon>
      <BtnIcon class="text-gray-500 hover:(text-gray-700)" @click.stop="moveDownKr" icon="expand_more"></BtnIcon>
      <BtnIcon class="text-gray-500 hover:(text-red-600)" @click.stop="removeKr" icon="close"></BtnIcon>
    </div>
  </div>
</template>

<script setup lang='ts'>
const store = useStore()

type krProps = {
  pIdx: number
  idx: number
  contents: string
  status: string

  // index'th element in krList
  index: number
}
const props = defineProps<krProps>()

const moveUpKr = () => {
  store.swapKr(props.pIdx, props.index - 1, props.index)
}

const moveDownKr = () => {
  store.swapKr(props.pIdx, props.index, props.index + 1)
}

const removeKr = () => {
  store.deleteKr(props.pIdx, props.index)
}
</script>

<style scoped></style>
