export const createTodoItem = ({ title, description }) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'col-4';

  wrapper.innerHTML = `
            <div class="list-group-item bg-light taskWrapper mb-4">
                <div class="taskHeading">${title}</div>
                <div class="taskDescription">${description}</div>
            </div>`;

  return wrapper;
};
