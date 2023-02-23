<template>
    <div class="relative bg-gray-300 w-400px h-6px rounded-3px ">
        <div class="absolute bg-green-600 h-6px rounded-3px transition" :style="{ width: barWidth }"></div>
    </div>
</template>

<script setup lang='ts'>
const props = defineProps<{
    progress: number
}>()

const barWidth = computed(() => {
    const w = props.progress * 4
    return `${w}px`
})
</script>
