<template>
    <div id="one-project" class="relative bg-green-50 p-4 my-4 rounded-2xl shadow-sm">
        <div id="funtions" class="absolute right-4 flex gap-2">
            <button class=" flex justify-center items-center p-1 bg-gray-200 rounded-xl shadow shadow-sm">
                <!-- TODO: Edit the project -->
                Edit
            </button>
            <button class=" flex justify-center items-center p-1  bg-gray-200 rounded-xl shadow shadow-sm">
                <!-- TODO: Generate sharing card -->
                Share
            </button>
        </div>
        <ProjectBrief v-bind="props.briefInfo" />
        <div class="flex flex-col gap-2 ml-10 mt-4 px-4 border-l-2 border-l-emerald-700">
            <ProjectKr v-for="(krInfo, idx) in props.krList" :key="idx" v-bind="krInfo" />
        </div>
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
</script>
