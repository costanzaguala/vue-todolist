const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Fare Esercizio ToDoList',
                    done: false
                },
                {
                    text: 'Fare Esercizio Boolzapp',
                    done: true
                },
                {
                    text: 'Fare esercizio Email list',
                    done: true
                },
            ],
            newTask: '',
        };
    },
    methods: {
        removeTask(i) {
            this.tasks.splice(i, 1);
        },
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({ text: this.newTask, done: false });
                this.newTask = '';
            }
        },
        invertDone(i) {
            this.tasks[i].done = !this.tasks[i].done;
        }
    }
});

app.mount('#app');
