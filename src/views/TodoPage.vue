<template class="bg-yellow-300">
    <!-- component -->
    <section>
        <div>
            <div class="flex justify-center">
                <button @click="showModal" class="bg-yellow-400 text-white px-4 py-2 mt-3 rounded">
                    ADD TASK
                </button>
            </div>
            <!-- Modal -->
            <div v-if="isModalVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div class="bg-white rounded editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                    <h2 class="text-base font-semibold mb-4">ADD NEW TASK</h2>
                    <form @submit.prevent="addTask">
                        <input type="text" v-model="newTaskName"
                            class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm"
                            placeholder="Title" required >
                        <textarea
                            class="mt-3 py-3 px-4 block w-full border-gray-200 rounded-md text-sm" 
                            rows="3" placeholder="Description"></textarea>

                        <div class="mt-4 flex justify-end">
                            <button type="submit" class="bg-yellow-500 text-white px-4 py-2 rounded">
                                ADD
                            </button>
                            <button @click="hideModal" class="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded">
                                CANCEL
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Div -->
        <div class="flex container mx-auto">
            <div class="w-1/2 ml-4 p-4">
                <div class=" p-2 bg-yellow-300">
                    <div class="flex space-x-4 mt-2 mb-2">
                        <lord-icon src="https://cdn.lordicon.com/ulhdumaq.json" trigger="hover"
                            colors="primary:#ffffff,secondary:#08a88a" stroke="150" style="width:25px;height:25px">
                        </lord-icon>
                        <span class="text-base font-semibold text-white">PROGRESS</span>
                    </div>
                </div>
                <div class="mt-4">
                    <ul class="space-y-4">
                        <li v-for="task in progressTasks" :key="task.id">
                            <label class="flex items-center px-4">
                                <input type="checkbox" class="form-checkbox h-4 w-4 text-yellow-400"
                                    @click="toggleTaskStatus(task)" />
                                <div class="ps-4"> <span :class="{ 'line-through': task.completed }">{{ task.name }}</span>
                                </div>

                            </label>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="w-1/2 p-4">
                <div class=" p-2 bg-green-300">
                    <div class="flex space-x-4 mt-2 mb-2">
                        <lord-icon src="https://cdn.lordicon.com/jvihlqtw.json" trigger="hover"
                            colors="primary:#ffffff,secondary:#0008ff" stroke="150" state="hover-2"
                            style="width:25px;height:25px">
                        </lord-icon>
                        <span class="text-base font-semibold text-white">DONE</span>
                    </div>
                </div>
                <div class="mt-4">
                    <ul class="space-y-4">
                        <li v-for="task in doneTasks" :key="task.id">
                            <label class="flex items-center px-4">
                                <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-500"
                                    @click="toggleTaskStatus(task)" checked disabled />
                                <span class="line-through">{{ task.name }}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

export default {

    data() {
        return {
            isModalVisible: false,
            newTaskName: '',
            progressTasks: [
                { id: 1, name: 'Task 1', completed: false },
                { id: 2, name: 'Task 2', completed: false },
                { id: 3, name: 'Task 3', completed: false }
            ],
            doneTasks: [
                { id: 4, name: 'Task 4', completed: true },
                { id: 5, name: 'Task 5', completed: true }
            ]
        };
    },
    methods: {
        toggleTaskStatus(task) {
            task.completed = !task.completed;
        },
        showModal() {
            this.isModalVisible = true;
        },
        hideModal() {
            this.isModalVisible = false;
            this.newTaskName = '';
        },
        addTask() {
            if (this.newTaskName.trim() !== '') {
                // Perform task addition logic here
                console.log('New task:', this.newTaskName);

                // Reset form and hide modal
                this.newTaskName = '';
                this.isModalVisible = false;
            }
        }
    }
};
</script>

