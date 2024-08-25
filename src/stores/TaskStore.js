import { defineStore } from "pinia";

// Invoke function to create a store from a variable
export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "Buy some milk", isFav: false},
            {id: 2, title: "Play GloomHaven", isFav: true}
        ]
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    }
})