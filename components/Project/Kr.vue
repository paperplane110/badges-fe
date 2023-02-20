<template>
    <div class="flex justify-between items-center p-3 bg-green-200 rounded-2xl max-w-150 shadow-sm">
        {{ props.contents }}
        <button class="h-20px w-20px rounded-5px shadow-md" :class="statusColor"></button>
    </div>
</template>

<script setup lang='ts'>
type krProps = {
    contents: string
    status: string
}
const props = defineProps<krProps>()

const statusColor = computed(() => {
    if (props.status === 'done') return "bg-emerald-400"
    else if (props.status === 'beyond') return "bg-indigo-400"
    else return "bg-gray-400"
})
</script>