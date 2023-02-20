<template>
    <div class="flex justify-center items-center h-80px w-80px rounded-1 text-5xl shadow shadow-md"
        :class="[props.bgColor, 'filter', saturateEffect, opacityEffect]">
        {{ props.pattern }}
    </div>
</template>

<script setup lang='ts'>
type badgeProps = {
    pattern: string
    bgColor: string
    progress?: number
}

const props = defineProps<badgeProps>()

const saturateEffect = computed(() => {
    let percent: number
    if (props.progress !== undefined) {
        percent = props.progress
    }
    else {
        percent = 100
    }

    return `saturate-${percent}`
})

const opacityEffect = computed(() => {
    let percent: number
    if (props.progress !== undefined) {
        percent = 60 + Math.ceil(props.progress * 0.4)
    }
    else {
        percent = 100
    }

    return `opacity-${percent}`
})
</script>
