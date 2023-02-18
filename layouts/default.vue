<template>
    <div class="grid grid-rows-[auto,1fr,auto] min-h-screen text-left justify-center">
        <div class="bg-green-100 min-w-screen">
            <div class="flex items-center h-16 px-8">
                <NuxtLink class="text-lg font-bold" to="/">Badges</NuxtLink>
            </div>
        </div>
        <div class="px-8 flex justify-center">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>