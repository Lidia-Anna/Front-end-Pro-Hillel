'use strict';

import getFormHandlers from './formHandlers.js';
import { createTodoItem } from './elements.js';
import { storageKey } from './constants.js';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemsContainer = document.querySelector('#todoItems');

  const saveData = (data) => {
    let savedData = JSON.parse(localStorage.getItem(storageKey));
    if (!savedData) savedData = [];

    savedData.push(data);
    localStorage.setItem(storageKey, JSON.stringify(savedData));
  };

  const handleFormData = ({ data, event }) => {
    event.target.reset();
    saveData(data);
    const todoItemElement = createTodoItem(data);
    todoItemsContainer.prepend(todoItemElement);
  };

  const { submitHandler, inputHandler } = getFormHandlers(form, handleFormData);

  form.addEventListener('submit', submitHandler);
  form.addEventListener('input', inputHandler);

  document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem(storageKey));

    savedData.forEach((todoItem) => {
      const todoItemElement = createTodoItem(todoItem);
      todoItemsContainer.prepend(todoItemElement);
    });
  });
}());
