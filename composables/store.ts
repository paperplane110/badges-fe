import { defineStore } from "pinia";


interface kr {
  idx: number       // kr's idx
  contents: string  // the contents of kr
  status: string    // done, undone, beyond
}


interface project {
  // project info
  name: string      // the name of the project
  idx: number       // project's index
  tag: string       // belongs to which tag
  progress: number  // the progress of project, integer, [0,100]

  // badges info
  pattern: string   // the pattern on the badge
  bgColor: string   // the background color of badge

  // Key result info
  krList: kr[]
}

interface tag {
  name: string
}

export const useStore = defineStore('store', {
  state: () => {
    return {
      userId: 'testid',
      username: 'testname',
      avatar: undefined,
      email: '1111@bbb.com',
      projectList: [
        {
          name: "Eat an apple everyday in Feb.",
          idx: 0,
          tag: "Health",
          progress: 0,
          pattern: "🍎",
          bgColor: "bg-orange-300",
          krList: [
            {
              idx: 0,
              contents: "Buy 30 apples",
              status: "undone"
            },
            {
              idx: 1,
              contents: "Eat an apple everyday in the 1st week.",
              status: "undone"
            },
            {
              idx: 2,
              contents: "Eat an apple everyday in the 2nd week.",
              status: "undone"
            },
            {
              idx: 3,
              contents: "Eat an apple everyday in the 3rd week.",
              status: "undone"
            },
            {
              idx: 4,
              contents: "Eat an apple everyday in the 4th week.",
              status: "undone"
            },
          ]
        },
        {
          idx: 1,
          name: "Go to work by bike in Feb.",
          progress: 0,
          tag: "Health",
          pattern: "🚴",
          bgColor: "bg-amber-300",
          krList: [],
        }
      ] as project[],
      tagList: [] as tag[],
    }
  },

  getters: {
    projectBrief(state) {
      return
    }
  },

  actions: {
    updateProjectProgress(pIdx: number) {
      if (this.projectList[pIdx].krList.length === 0) {
        this.projectList[pIdx].progress = 0
      } else {
        let cnt = 0
        for (let kr of this.projectList[pIdx].krList) {
          if (kr.status !== 'undone') cnt++
        }
        this.projectList[pIdx].progress = Math.ceil(cnt / this.projectList[pIdx].krList.length * 100)
      }
    },

    newKr(pIdx: number) {
      // create a new empty Kr in project[idx] and update progress

      const latestKrIdx = this.projectList[pIdx].krList.length

      this.projectList[pIdx].krList.push({
        idx: latestKrIdx,
        contents: '',
        status: 'undone'
      })
      this.updateProjectProgress(pIdx)
    },

    deleteKr(pIdx: number, krIdx: number) {
      // remove the krIdx'th Kr from the pIdx'th project and update progress
      this.projectList[pIdx].krList = this.projectList[pIdx].krList.filter(krInfo => krInfo.idx !== krIdx)
      for (let i = krIdx; i < this.projectList[pIdx].krList.length; i++) {
        this.projectList[pIdx].krList[i].idx = i
      }
      this.updateProjectProgress(pIdx)
    },

    swapKr(pIdx: number, aIdx: number, bIdx: number) {
      if (aIdx < 0 || bIdx >= this.projectList[pIdx].krList.length) return

      const tmpContents = this.projectList[pIdx].krList[aIdx].contents
      const tmpStatus = this.projectList[pIdx].krList[aIdx].status
      this.projectList[pIdx].krList[aIdx].contents = this.projectList[pIdx].krList[bIdx].contents
      this.projectList[pIdx].krList[aIdx].status = this.projectList[pIdx].krList[bIdx].status
      this.projectList[pIdx].krList[bIdx].contents = tmpContents
      this.projectList[pIdx].krList[bIdx].status = tmpStatus
    },

    changeKrStatus(pIdx: number, krIdx: number, status: string) {
      // change kr state
      this.projectList[pIdx].krList[krIdx].status = status

      // update project progress
      this.updateProjectProgress(pIdx)
    },
  }
})
