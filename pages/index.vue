<template>
    <div class="flex flex-col max-w-1024px">

        <div class="my-8">
            <p class="text-5xl font-bold">Home<span class="text-violet-500">.</span></p>
            <br />
            <p>Welcome home, stranger😎</p>
            <p>Take a seat, have a cup of warm tea🍵</p>
            <p>And most importantly, set your projects then get shining badges🏅</p>
        </div>
        <div id="bagdes">
            <div class="flex mt-10 mb-4 text-4xl font-bold">Badges<p class="font-bold text-green-500">.</p>
            </div>
            <div class="bg-green-50 p-4 grid grid-cols-15 rounded rounded-2xl">
                <div
                    class="flex justify-center items-center h-80px w-80px bg-orange-300 rounded-1 text-5xl shadow shadow-md">
                    🍎
                </div>
                <div
                    class="flex justify-center items-center h-80px w-80px bg-amber-300 rounded-1 text-5xl shadow shadow-md">
                    🚴
                </div>
                <div class="flex justify-center items-center h-80px w-80px bg-lime-300 rounded-1 text-5xl shadow shadow-md">
                    ♻️
                </div>
                <div class="flex justify-center items-center h-80px w-80px bg-sky-300 rounded-1 text-5xl shadow shadow-md">
                    💪
                </div>
                <Badge pattern="B" bg-color="bg-emerald-300" :progress="22" />
            </div>
        </div>
        <div id="projects" class="mb-8">
            <div class="flex mt-10 mb-4 text-4xl font-bold">Projects<p class="font-bold text-blue-500">.</p>
            </div>
            <div>
                <Project v-bind="appleProject" />

                <div id="one-project" class="relative bg-green-50 p-4 my-4 rounded-lg shadow-sm">
                    <div class="absolute right-4 flex gap-2">
                        <div class=" flex justify-center items-center p-1 bg-gray-200 rounded-xl shadow shadow-sm">
                            Edit
                        </div>
                        <div class=" flex justify-center items-center p-1  bg-gray-200 rounded-xl shadow shadow-sm">
                            Share
                        </div>
                    </div>
                    <div id="p-title" class="flex items-center gap-4">
                        <div
                            class="flex justify-center items-center h-80px w-80px bg-amber-300 rounded-1 text-5xl shadow shadow-md">
                            🚴</div>
                        <div>
                            <div class="text-3xl mb-1">
                                Project 2: Go to work by BIKE in Feb.
                            </div>
                            <div class="flex items-center gap-3">
                                <div id="tag" class="font-bold">
                                    #Health
                                </div>
                                <div class="relative bg-gray-300 w-400px h-6px rounded-3px ">
                                    <div class="absolute bg-green-600 w-200px h-6px rounded-3px "></div>
                                </div>
                                <div class="font-bold">🚀50%</div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

const appleProject = {
    briefInfo: {
        pattern: "🍎",
        bgColor: "bg-orange-300",
        progress: 60,
        projectName: "Eat an apple everyday in Feb.",
        projectIndex: 1,
        tag: "Health",
    },
    krList: [
        {
            contents: "Buy 30 apples",
            status: "done"
        },
        {
            contents: "Eat an apple everyday in the 1st week.",
            status: "done"
        },
        {
            contents: "Eat an apple everyday in the 2nd week.",
            status: "done"
        },
        {
            contents: "Eat an apple everyday in the 3rd week.",
            status: "undone"
        },
        {
            contents: "Eat an apple everyday in the 4th week.",
            status: "undone"
        },
    ]
}

</script>