import { defineStore } from "pinia";

// Invoke function to create a store from a variable
export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "Buy some milk", isFav: false},
            {id: 2, title: "Play GloomHaven", isFav: true}
        ]
    })
})