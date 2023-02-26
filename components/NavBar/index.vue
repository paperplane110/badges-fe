<template>
  <div class="min-w-screen border-b">
    <div class="flex justify-between items-center h-16 px-8">
      <div>
        <NuxtLink class="relative group text-xl font-bold mr-12" to="/">
          Badges
          <svg class="absolute -left-4.5 -top-3.5 opacity-0 transition-opacity group-hover:(opacity-100)" width="110"
            height="54" viewBox="0 0 116 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.3276 13.8283C29 12.5 23.5 7.5 18 5" stroke="#F4D259" stroke-width="3" stroke-linecap="round" />
            <path d="M45.8313 12.6627C45.5 12 41.2789 5.64524 41 5" stroke="#F4D259" stroke-width="3"
              stroke-linecap="round" />
            <path d="M62 12.5C62 7.44596 63 4.5 65.5 1.5" stroke="#F4D259" stroke-width="3" stroke-linecap="round" />
            <path d="M77 15.3299C78.0675 13.9066 79.1063 12.452 80.3318 11.1652C81.1718 10.2832 82 9 83 8"
              stroke="#F4D259" stroke-width="3" stroke-linecap="round" />
            <path d="M94.5 16.5C97.5 11.5 102.5 8 107.297 6.67468" stroke="#F4D259" stroke-width="3"
              stroke-linecap="round" />
            <path d="M103 27C104.702 27.0774 110.5 29 114 31.5" stroke="#F4D259" stroke-width="3"
              stroke-linecap="round" />
            <path d="M97 41C99.5 41.5 102.5 44 104.5 49" stroke="#F4D259" stroke-width="3" stroke-linecap="round" />
            <path d="M81 44C83 46 84.145 48.8895 85 52" stroke="#F4D259" stroke-width="3" stroke-linecap="round" />
            <path d="M64 45C64 47.282 64.1666 49.5609 64.1666 51.8301" stroke="#F4D259" stroke-width="3"
              stroke-linecap="round" />
            <path d="M49.1638 43C48 44.5 45 47 43.5 52" stroke="#F4D259" stroke-width="3" stroke-linecap="round" />
            <path d="M28.1615 42C22.5 44 18 49 16 51.5" stroke="#F4D259" stroke-width="3" stroke-linecap="round" />
            <path d="M13.9944 20.4974C12.3084 18.972 7.5 17.5 2 17.5" stroke="#F4D259" stroke-width="3"
              stroke-linecap="round" />
            <path d="M12.7461 35.108C11 35.108 7 36 2.5 40.5" stroke="#F4D259" stroke-width="3" stroke-linecap="round" />
          </svg>

        </NuxtLink>
        <NuxtLink class="group relative text-lg mr-5" to="/projects">
          Projects
          <svg class="absolute -left-1 top-5 opacity-0 transition-opacity group-hover:(opacity-100)"
            :style="routeActivated('/projects')" width="80" height="10" viewBox="0 0 92 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 2.90513C3.84252 2.90513 9.66471 7.66391 12 7.50003C15.3507 7.2649 16.4398 3.29731 20.5 2.90513C25.3594 2.90513 27.1427 7.37221 32 7.50003C35.08 7.58109 37.7675 4.1889 40.8166 4.57555C43.635 4.93297 47.1831 7.71006 50 8.00003C53.6455 8.37531 56.8292 2.90513 60.5 2.90513C64.8317 2.90513 68.1894 8.09785 72.5 7.50003C76.254 6.9794 77.17 3.26462 80.5 1.50003C82.4382 0.472966 87.9237 7.09784 90 6.40573"
              stroke="#3B82F6" stroke-width="3" stroke-linecap="square" />
          </svg>
        </NuxtLink>
        <NuxtLink class="group relative text-lg mr-5" to="/dashboard">
          Dashboard
          <svg class="absolute -left-1 top-5 opacity-0 transition-opacity group-hover:(opacity-100)"
            :style="routeActivated('/dashboard')" width="100" height="7" viewBox="0 0 133 7" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 4C11.8462 4 20.154 2.44884 31 2.5C38.8552 2.53705 50.1477 5.29245 58 5.5C67.6652 5.75547 77.3709 2.26923 87 1.4133C98.8202 0.362618 104.165 4.44756 116 4C118.654 3.89963 122 3 124.5 2.5C127 2 129 1.5 131.5 1.5"
              stroke="#10B981" stroke-width="3" stroke-linecap="square" />
          </svg>

        </NuxtLink>
      </div>
      <div class="flex items-center">
        <NuxtLink class="text-lg mr-12 hover:(underline)" to="https://github.com/paperplane110/badges-fe" target="_blank">
          Github<span class="material-icons align-middle">open_in_new</span>
        </NuxtLink>
        <button class="grid place-items-center w-12 h-12 rounded-1 bg-sky-600 text-white text-xl">
          Ty
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const routeActivated = computed(() => (to: string) => {
  const route = useRoute()
  const rootRoute = `/${route.path.split('/')[1]}`
  if (rootRoute === to) {
    return { 'opacity': 100 }
  } else return {}
})
</script>
