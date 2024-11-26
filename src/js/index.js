class TaskQueue {
// valueDelay = 1000;
  arrTask = [];
  constructor(valueDelay) {
    this.valueDelay = valueDelay;
  }
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    addTask(task) {
        this.arrTask.push(task);
    }

    run() {
      let promiseTask = Promise.resolve();
        this.arrTask.forEach((task) => {
            promiseTask = promiseTask
                .then(() => {
                    console.log(task);
                    return this.delay(this.valueDelay);
                });
        });

        promiseTask.finally(() => {
            console.log('Усі завдання завершено');
        });
    }
}
const queue = new TaskQueue(1000);
queue.addTask('Task 1 виконано');
queue.addTask('Task 2 виконано');
queue.addTask('Task 3 виконано');
queue.run();
