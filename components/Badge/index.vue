<template>
  <div class="background">
    <div class="badge flex justify-center items-center h-80px w-80px rounded-1 text-5xl shadow shadow-md select-none"
      :class="[props.bgColor]">
      {{ props.pattern }}
    </div>
  </div>
</template>

<script setup lang='ts'>
type badgeProps = {
  pattern: string
  bgColor: string
  progress?: number
}

const props = defineProps<badgeProps>()
</script>

<style scoped>
.badge {

  transition: transform 500ms;
}

.background:hover .badge {
  transition: transform 1000ms;
  transform: rotateY(360deg);
}
</style>
