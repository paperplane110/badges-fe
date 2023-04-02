<template>
  <div id="one-project"
    class="relative flex flex-col bg-gray-50 p-4 my-4 rounded-2xl shadow-sm transition hover:shadow-md">
    <div id="funtions" class="absolute right-4 flex gap-2">
      <BtnIcon class="text-gray-500 hover:(text-gray-700)" title="Edit" @click.stop="editKr" icon="edit">
      </BtnIcon>
      <BtnIcon class="text-gray-500 hover:(text-gray-700)" title="Share" icon="share">
        <!-- TODO: Generate sharing card -->
      </BtnIcon>
      <BtnIcon class="text-gray-500 hover:(text-gray-700)" title="Show KRs" @click="expandKr" icon="expand_circle_down">
      </BtnIcon>
    </div>
    <ProjectBrief :name="props.name" :idx="props.idx" :progress="props.progress" :tag="props.tag" :pattern="props.pattern"
      :bg-color="props.bgColor" />
    <Transition>
      <div v-if="isShow" class="ml-10 mt-4 px-4 border-l transition-all">

        <!-- if we already have some Kr -->
        <div v-if="props.krList.length !== 0">
          <div v-if="isEdit === false" class="flex flex-col ">
            <Kr v-for="(krInfo, idx) in props.krList" :key="idx" v-bind="krInfo" :pIdx="props.idx" :index="idx">
            </Kr>
          </div>
          <div v-else class="flex flex-col">
            <KrEdit v-for="(krInfo, idx) in props.krList" :key="idx" v-bind="krInfo" :pIdx="props.idx" :index="idx">
            </KrEdit>
          </div>
        </div>

        <!-- we don't have any Kr now -->
        <p v-else class="py-2 text-lg">
          <span class="material-icons text-gray-700 align-middle">info</span>
          It seems that you don't have any KRs in this project,
          set one and get started!
        </p>

        <!-- if we are in edit mode, show some buttons -->
        <div v-if="isEdit" class="flex gap-4 mx-3 my-2">
          <BtnFlat bg-color="bg-green-500" text-color="text-white" ficon="add" @click="addNewKr">New</BtnFlat>
          <BtnFlat bg-color="bg-blue-500" text-color="text-white" ficon="save" @click="saveProject">Save</BtnFlat>
          <BtnFlat bg-color="bg-red-500" text-color="text-white" @click="cancelChange" ficon="close">Cancel</BtnFlat>
        </div>

      </div>
    </Transition>
  </div>
</template>

<script setup lang='ts'>
const store = useStore()

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
const oldKrList = JSON.parse(JSON.stringify(store.projectList[props.idx].krList))

const isShow = ref(false)
const expandKr = () => {
  isShow.value = !isShow.value
}

const isEdit = ref(false)
const editKr = () => {
  console.log("is Edit")
  if (isShow.value === true && isEdit.value === true) {
    isShow.value = false
    isEdit.value = false
  } else {
    isShow.value = true
    isEdit.value = true
  }
}

const addNewKr = () => {
  store.newKr(props.idx)
}

const saveProject = () => {
  // make a request to submit
  // turn to display
  isEdit.value = false
  isShow.value = true
}

// BUG
const cancelChange = () => {
  console.log(oldKrList)
  store.projectList[props.idx].krList = oldKrList
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
