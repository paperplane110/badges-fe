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
      <div class="flex mt-10 mb-4 text-4xl font-bold">
        <div>Badges<span class="font-bold text-green-500">.</span></div>
      </div>
      <div
        class="relative bg-gradient-to-r from-blue-100 to-green-100 p-4 grid grid-cols-15 rounded-2xl transition-shadow duration-300 hover:(shadow-md)">
        <div class="absolute top-4 right-4">
          <Btn class="rounded-1" title="Share">
            <!-- TODO: Generate sharing card -->
            <span class="material-icons text-green-700">
              share
            </span>
          </Btn>
        </div>
        <Badge pattern="🍑" bg-color="bg-orange-300" />
        <Badge pattern="🚴" bg-color=" bg-amber-300" />
        <Badge pattern="♻️" bg-color="bg-lime-300" />
        <Badge pattern="🏊" bg-color="bg-sky-300" />
        <Badge class="text-white font-bold transform rotate-20" pattern="₿" bg-color="bg-amber-500" :progress="22" />
      </div>
    </div>
    <div id="projects" class="mb-8">
      <div class="flex mt-10 mb-4 text-4xl font-bold">Projects<p class="font-bold text-blue-500">.</p>
      </div>
      <div>
        <Project v-bind="appleProject" />
        <Project v-bind="bikeProject" />
        <div id="one-project"
          class="relative flex flex-col bg-gray-50 p-4 my-4 rounded-2xl shadow-sm transition hover:shadow-md">
          <div id="p-title" class="flex items-center gap-4">
            <Badge pattern="❓" bg-color="bg-gray-200" :progress="0" />
            <div>
              <div class="text-3xl mb-1">
                Wanna get another badge?
              </div>
              <div class="flex items-center gap-3">
                <div id="tag" class="font-bold">
                  #Tag
                </div>
                <ProgressBar :progress="0" />
                <div class="font-bold">🐢0%</div>
              </div>
            </div>
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

const bikeProject = {
  briefInfo: {
    pattern: "🚴",
    bgColor: "bg-amber-300",
    progress: 0,
    projectName: "Go to work by bike in Feb.",
    projectIndex: 2,
    tag: "Health",
  },
  krList: [],
}

</script>
