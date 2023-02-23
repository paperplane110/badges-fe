<template>
    <div class="grid grid-rows-[auto,1fr,auto] min-h-screen text-left justify-center">
        <NavBar />
        <div class="px-8 flex justify-center">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>