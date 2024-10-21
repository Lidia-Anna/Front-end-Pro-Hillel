'use strict';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const listContainer = document.querySelector('#todoItems');
  const objOfTask = {};

  const inputTitle = form.elements.title;
  const textareaDescription = form.elements.description;
  // console.log(inputTitle, textareaDescription);
  const listItemTemplate = ({ id, title, description } = {}) => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'col-4';
    wrapperDiv.setAttribute('data-task-id', id);

    wrapperDiv.innerHTML = `
            <div class="list-group-item bg-light taskWrapper mb-4">
                <div class="taskHeading"><b>${title}</b></div>
                <div class="taskDescription mb-2">${description}</div>
                <hr>
                <button class="btn btn-danger delete-btn">Delete</button>
            </div>`;
    return wrapperDiv;
  };
  // Event

  const createNewTask = (title, description) => {
    const newTask = {
      title,
      description,
      id: `task-${Math.random()}`,
    };
    objOfTask[newTask.id] = newTask;
    return { ...newTask };
  };
  const saveData = ({ id, title, description }) => {
    let saveDatas = JSON.parse(localStorage.getItem('todoItems'));
    if (!saveDatas) saveDatas = [];
    saveDatas.push({ id, title, description });
    localStorage.setItem('todoItems', JSON.stringify(saveDatas));
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const titleValue = inputTitle.value;
    const descriptionValue = textareaDescription.value;

    if (!titleValue || !descriptionValue) {
      alert('Please input title and description');
      return;
    }

    const task = createNewTask(titleValue, descriptionValue);
    saveData(task);
    const listItem = listItemTemplate(task);
    listContainer.prepend(listItem);
    form.reset();
  };

  const deleteTask = (id) => {
    const { title } = objOfTask[id];
    const isConfirm = confirm(`Are you relly want to delete Task: ${title}`);
    if (!isConfirm) return isConfirm;
    delete objOfTask[id];
    return isConfirm;
  };

  const deleteTaskFromLocakStorage = (confirmed, id) => {
    const savedData = JSON.parse(localStorage.getItem('todoItems'));
    const index = savedData.findIndex((item) => item.id === id);
    savedData.splice(index, 1);
    localStorage.setItem('todoItems', JSON.stringify(savedData));
  };

  const deleteTaskFromHTML = (confirmed, element) => {
    if (!confirmed) return;
    element.remove();
  };

  const onDeleteHandler = ({ target }) => {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromLocakStorage(confirmed, id);
      deleteTaskFromHTML(confirmed, parent);
    }
  };
  form.addEventListener('submit', onFormSubmitHandler);
  listContainer.addEventListener('click', onDeleteHandler);

  document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('todoItems')) || [];

    savedData.forEach((todoItem) => {
      const task = createNewTask(todoItem.title, todoItem.description);
      const listItem = listItemTemplate(task);
      listContainer.prepend(listItem);
    });
  });
}());
