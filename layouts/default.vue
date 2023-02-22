<template>
    <div class="grid grid-rows-[auto,1fr,auto] min-h-screen text-left justify-center">
        <div class="min-w-screen border-b">
            <div class="flex justify-between items-center h-16 px-8">
                <div>
                    <NuxtLink class="text-xl font-bold mr-12" to="/">
                        Badges
                    </NuxtLink>
                    <NuxtLink class="text-lg mr-5" to="/">
                        projects
                    </NuxtLink>
                    <NuxtLink class="text-lg mr-5" to="/">
                        dashboard
                    </NuxtLink>
                    <NuxtLink class="text-lg mr-5" to="/">
                        about
                    </NuxtLink>
                </div>
                <div>
                    <button class="grid place-items-center w-12 h-12 rounded-1 bg-sky-600 text-white text-xl">
                        Ty
                    </button>
                </div>
            </div>
        </div>
        <div class="px-8 flex justify-center">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>