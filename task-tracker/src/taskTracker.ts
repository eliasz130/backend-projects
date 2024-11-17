import * as process from 'process';
import {TaskManager} from './TaskManager';

// Initialize task manager
const taskManager = new TaskManager();

// Helper function to get command line arguments
const getArgs = (): string[] => process.argv.slice(2);

const main = () => {
    const args = getArgs();

    if (args.length === 0) {
        console.log('Please provide a command.');
        return;
    }

    const command = args[0];

    switch (command) {
        case 'add':
            if (args.length < 3) {
                console.log('Usage: add <task_name> <task_description>');
                return;
            }
            const [name, description] = args.slice(1);
            taskManager.addTask(name, description);
            console.log('Task added successfully!');
            break;

        case 'update':
            if (args.length < 4) {
                console.log('Usage: update <task_id> <task_name> <task_description>');
                return;
            }
            const updateId = parseInt(args[1]);
            const updateName = args[2];
            const updateDescription = args.slice(3).join(' ');
            taskManager.updateTask(updateId, updateName, updateDescription);
            console.log('Task updated successfully!');
            break;

        case 'delete':
            if (args.length < 2) {
                console.log('Usage: delete <task_id>');
                return;
            }
            const deleteId = parseInt(args[1]);
            taskManager.deleteTask(deleteId);
            console.log('Task deleted successfully!');
            break;

        case 'mark':
            if (args.length < 3) {
                console.log('Usage: mark <task_id> <status>');
                return;
            }
            const markId = parseInt(args[1]);
            const status = args[2] as 'in progress' | 'done';
            taskManager.markTaskStatus(markId, status);
            console.log('Task status updated successfully!');
            break;

        case 'list':
            if (args.length < 2) {
                console.log('Usage: list <status>');
                return;
            }
            const statusList = args[1] as 'not started' | 'in progress' | 'done';
            taskManager.listTasks(statusList);
            break;

        default:
            console.log('Invalid command.');
    }
};

// Start the program
main();