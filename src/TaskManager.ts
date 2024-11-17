import * as fs from 'fs';

interface Task {
    id: number;
    name: string;
    description: string;
    status: 'not started' | 'in progress' | 'done';
}

export class TaskManager {
    private tasks: Task[] = [];
    private fileName: string = 'tasks.json';

    constructor() {
        this.loadTasks();
    }

    private loadTasks(): void {
        if (fs.existsSync(this.fileName)) {
            const data = fs.readFileSync(this.fileName, 'utf-8');
            try {
                const tasksJson: Task[] = JSON.parse(data);
                this.tasks = tasksJson;
            } catch (err) {
                console.error('Error parsing tasks JSON:', err);
                this.tasks = [];
            }
        } else {
            this.tasks = [];
        }
    }

    private saveTasks(): void {
        fs.writeFileSync(this.fileName, JSON.stringify(this.tasks, null, 2));
    }

    public addTask(name: string, description: string): void {
        const newTask: Task = {
            id: this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1,
            name,
            description,
            status: 'not started'
        };
        this.tasks.push(newTask);
        this.saveTasks();
    }

    public updateTask(id: number, name: string, description: string): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.name = name;
            task.description = description;
            this.saveTasks();
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    public deleteTask(id: number): void {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.saveTasks();
    }

    public markTaskStatus(id: number, status: 'in progress' | 'done'): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.status = status;
            this.saveTasks();
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    public listTasks(status?: 'not started' | 'in progress' | 'done'): void {
        const filteredTasks = status
            ? this.tasks.filter(t => t.status === status)
            : this.tasks;

        if (filteredTasks.length === 0) {
            console.log('No tasks available.');
        } else {
            filteredTasks.forEach((task) => {
                console.log(`ID: ${task.id}, Name: ${task.name}, Status: ${task.status}`);
                console.log(`Description: ${task.description}`);
                console.log('---');
            });
        }
    }
}