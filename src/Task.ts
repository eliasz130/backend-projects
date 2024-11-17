export class Task {
    name: string;
    description: string;
    status: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.status = 'pending';  // Default status is 'pending'
    }

    markCompleted() {
        this.status = 'completed';
    }

    toString() {
        return `[${this.status}] ${this.name}: ${this.description}`;
    }
}