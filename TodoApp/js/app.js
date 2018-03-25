document.addEventListener('DOMContentLoaded', function main() {
    var form = document.querySelector('#todoForm');

    form.addEventListener('submit', function onFormSubmit(e) {
        e.preventDefault();

        var input = document.querySelector('#todo');

        var todoText = input.value;

        input.value = '';

        var todoList = document.querySelector('#todoList');

        //todoList.insertAdjacentHTML('beforeend', `<li>${todoText}</li>`);

        var todoItem = document.createElement('li');

        todoItem.addEventListener('click', function (e) {
            /**
             * @type {HTMLElement}
             */
            var item = e.target;

            item.classList.toggle('completed-todo');
        });

        var button = document.createElement('button');
        button.textContent = 'Remover';
        button.setAttribute('type', 'button');

        button.addEventListener('click', function (e) {
            /**
             * @type {HTMLButtonElement}
             */
            var clickedButton = e.target;

            clickedButton.parentElement.remove();
        });
        
        todoItem.textContent = todoText;

        todoItem.appendChild(button);
        todoList.appendChild(todoItem);
    });
});
