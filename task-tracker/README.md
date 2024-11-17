## Task Tracker CLI API

In Nodejs and TS, first backend project. Planning to go back to Python for now.

Start by running:

```
git clone https://github.com/eliasz130/task-tracker.git </br>
cd task-tracker </br>
npx ts-node src/taskTracker.ts </br>
```

```
npx ts-node ~/src/taskTracker.ts add <"Task Name"> <"Task Description">

npx ts-node src/taskTracker.ts update <ID> <"New Task Name">
npx ts-node src/taskTracker.ts delete <ID>

npx ts-node src/taskTracker.ts mark-in-progress <ID>
npx ts-node src/taskTracker.ts mark-done <ID>

npx ts-node src/taskTracker.ts list

npx ts-node src/taskTracker.ts list done
npx ts-node src/taskTracker.ts list todo
npx ts-node src/taskTracker.ts list in-progress
```

For the [Roadmap.sh](https://roadmap.sh/projects/task-tracker) Task Tracker project
