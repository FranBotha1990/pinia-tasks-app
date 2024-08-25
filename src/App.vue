<template>
    <main>

        <!-- heading -->
         <header>
            <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
            <h1>Pinia Tasks</h1>
         </header>

         <!-- task list -->
         <div class="task-list">
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task"/>
            </div>
         </div>

    </main>
</template>

<script>
    import TaskDetails from './components/TaskDetails.vue';
    import { useTaskStore } from './stores/TaskStore';

    export default {
        components: { TaskDetails },
        setup () {
            // Declare a variable, using the useTaskStore, and invoke it ()
            const taskStore = useTaskStore()

            return { taskStore }
        }
        
    }
    
</script>