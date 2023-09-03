// DOM Element Selectors
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

// Initialize To-Do List
let toDos = [];

// Local Storage Handling
const LOCAL_STORAGE_KEY = 'todos';

function saveToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
}

function loadFromLocalStorage() {
    const storedToDos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedToDos) {
        toDos = JSON.parse(storedToDos);
    }
}

// To-Do Rendering
function createTodoElement(ob) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    li.id = ob.id;
    span.innerText = ob.text;
    button.innerText = '❌';

    button.addEventListener('click', function (e) {
        removeTodo(e, ob);
    });

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function removeTodo(event, ob) {
    const li = event.target.parentNode;

    li.classList.add('fade-out');

    let left = 0;
    let right = toDos.length - 1;
    const target = ob.id;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (toDos[mid].id === target) {
            toDos.splice(mid, 1); // This actually removes the item
            break; // Exit the loop once the item is found and removed
        }

        if (toDos[mid].id < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    saveToLocalStorage();

    li.addEventListener('transitionend', function () {
        li.remove();
    });
}

function addTodo(newTodo) {
    const ob = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(ob);
    createTodoElement(ob);
    saveToLocalStorage();
}

// Event Listeners
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    addTodo(newTodo);
});

function initialize() {
    // Initialize
    loadFromLocalStorage();
    toDos.forEach((todo) => createTodoElement(todo));
}

initialize();
