<template>
    <div id="p-title" class="flex items-center gap-4">
        <Badge :pattern="props.pattern" :bg-color="props.bgColor" :progress="props.progress" />
        <div>
            <div class="text-3xl mb-1">
                Project {{ props.projectIndex }}: {{ props.projectName }}
            </div>
            <div class="flex items-center gap-3">
                <div id="tag" class="font-bold">
                    #{{ props.tag }}
                </div>
                <ProgressBar :progress="props.progress" />
                <div class="font-bold">🚀{{ props.progress }}%</div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
type projectBriefProps = {
    pattern: string
    bgColor: string
    progress: number
    projectName: string
    projectIndex: number
    tag: string
}

const props = defineProps<projectBriefProps>()
</script>
