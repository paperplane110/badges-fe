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
            <div class="bg-green-50 p-4 grid grid-cols-15 rounded-2xl shadow-sm">
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
                <Project v-bind="bikeProject" />
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

const bikeProject = {
    briefInfo: {
        pattern: "🚴",
        bgColor: "bg-amber-300",
        progress: 50,
        projectName: "Go to work by bike in Feb.",
        projectIndex: 2,
        tag: "Health",
    },
    krList: [],
}

</script>