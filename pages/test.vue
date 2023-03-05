<template>
  <div class="flex flex-col gap-10 w-1024px items-start">
    <br />
    <div>
      <div class="flex gap-4 items-center">
        <code class="text-xl">POST</code>
        <p class="text-xl">/hello</p>
        <button class="p-2 border rounded-md" @click="hello">send</button>
      </div>
      <p>Data: {{ helloResp?.data }}</p>
    </div>

    <div>
      <div class="flex gap-4 items-center">
        <code class="text-xl">POST</code>
        <p class="text-xl">/user/search</p>
        <label>
          username
          <input name="username" type="text" class="border" v-model="username" />
        </label>
        <button class="p-2 border rounded-md" @click="userSearch">send</button>
      </div>
      <p>Data: {{ userSearchResp?.data }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
let helloResp = ref({})
async function hello() {
  try {
    helloResp.value = await useFetch('/api/hello', {
      method: "POST",
      body: {
        msg: "Hello from the front-end"
      }
    })
  } catch (err) {
    console.log(err)
  }
}

let userSearchResp = ref({})
let username: string
async function userSearch() {
  try {
    userSearchResp.value = await useFetch('/api/user/search', {
      method: "POST",
      body: {
        username: username
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const clear = (r: Ref) => {
  r.value = null
}
</script>
