<template>
    <div id="one-project"
        class="relative flex flex-col bg-green-50 p-4 my-4 rounded-2xl shadow-sm transition hover:shadow-md">
        <div id="funtions" class="absolute right-4 flex gap-2">
            <Btn class="bg-emerald-100 rounded-1" title="Edit">
                <!-- TODO: Edit the project -->
                <span class="material-icons text-emerald-700">
                    edit
                </span>
            </Btn>
            <Btn class="bg-emerald-100  rounded-1" title="Share">
                <!-- TODO: Generate sharing card -->
                <span class="material-icons text-emerald-700">
                    share
                </span>
            </Btn>
            <Btn class="bg-emerald-100  rounded-1" title="Show KRs" @click="expandKr">
                <span class="material-icons text-emerald-700">
                    expand_circle_down
                </span>
            </Btn>
        </div>
        <ProjectBrief v-bind="props.briefInfo" />
        <Transition>
            <div v-if="isShow" class="ml-10 mt-4 px-4 border-l-2 border-l-emerald-700 transition-all">
                <div v-if="props.krList.length !== 0" class="flex flex-col gap-2 ">
                    <ProjectKr v-for="(krInfo, idx) in props.krList" :key="idx" v-bind="krInfo" />
                </div>
                <p v-else class="py-2 text-lg">
                    <span class="material-icons text-emerald-700 align-middle">info</span>
                    It seems that you don't have any KRs in this project,
                    set one and get start!
                </p>
            </div>
        </Transition>
        <!-- <div class="flex mt-4 justify-center">
                                                <button class="bg-green-200 px-2 rounded-lg">👆Hide</button>
                                                </div> -->
    </div>
</template>

<script setup lang='ts'>

type projectProps = {
    briefInfo: {
        pattern: string
        bgColor: string
        progress: number
        projectName: string
        projectIndex: number
        tag: string
    }
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