<template>
  <div id="one-project"
    class="relative flex flex-col bg-gray-50 p-4 my-4 rounded-2xl shadow-sm transition hover:shadow-md">
    <div id="funtions" class="absolute right-4 flex gap-2">
      <Btn class="bg-gray-200 rounded-1" title="Edit">
        <!-- TODO: Edit the project -->
        <span class="material-icons text-gray-700">
          edit
        </span>
      </Btn>
      <Btn class="bg-gray-200  rounded-1" title="Share">
        <!-- TODO: Generate sharing card -->
        <span class="material-icons text-gray-700">
          share
        </span>
      </Btn>
      <Btn class="bg-gray-200  rounded-1" title="Show KRs" @click="expandKr">
        <span class="material-icons text-gray-700">
          expand_circle_down
        </span>
      </Btn>
    </div>
    <ProjectBrief :name="props.name" :idx="props.idx" :progress="props.progress" :tag="props.tag" :pattern="props.pattern"
      :bg-color="props.bgColor" />
    <Transition>
      <div v-if="isShow" class="ml-10 mt-4 px-4 border-l transition-all">
        <div v-if="props.krList.length !== 0" class="flex flex-col ">
          <Kr v-for="(krInfo, idx) in props.krList" :key="idx" v-bind="krInfo" :pIdx="props.idx">
          </Kr>
        </div>
        <p v-else class="py-2 text-lg">
          <span class="material-icons text-gray-700 align-middle">info</span>
          It seems that you don't have any KRs in this project,
          set one and get started!
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang='ts'>

type projectProps = {
  name: string
  idx: number
  progress: number
  tag: string

  pattern: string
  bgColor: string

  krList: object[]
}

const props = defineProps<projectProps>()

const isShow = ref(false)
const expandKr = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
