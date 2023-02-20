<template>
    <div class="relative bg-gray-300 w-400px h-6px rounded-3px ">
        <div class="absolute bg-green-600 w-250px h-6px rounded-3px" :class="barWidth"></div>
    </div>
</template>

<script setup lang='ts'>
const props = defineProps<{
    progress: number
}>()

const barWidth = computed(() => {
    const w = props.progress / 100 * 400
    return `w-${w}px`
})
</script>
