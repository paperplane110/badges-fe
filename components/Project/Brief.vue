<template>
  <div id="p-title" class="flex items-center gap-4">
    <Badge :pattern="props.pattern" :bg-color="props.bgColor" :progress="props.progress" />
    <div>
      <div class="text-3xl mb-1">
        {{ props.name }}
      </div>
      <div class="flex items-center gap-3">
        <div id="tag" class="font-bold">
          #{{ props.tag }}
        </div>
        <ProgressBar :progress="props.progress" />
        <div class="font-bold">{{ progressIndicator }}{{ props.progress }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
type projectBriefProps = {
  pattern: string
  bgColor: string
  progress: number
  name: string
  idx: number
  tag: string
}

const props = defineProps<projectBriefProps>()

const progressIndicator = computed(() => {
  if (props.progress <= 10) {
    return '🐢'
  } else if (props.progress <= 50) {
    return '🔥'
  } else if (props.progress <= 70) {
    return '⚡️'
  } else if (props.progress < 100) {
    return '🚀'
  } else {
    return '🎉'
  }
})
</script>
