// DOM elements and constants
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loggedIn = document.querySelector('#logged-in');
const showName = document.querySelector('#logged-in span');
const logoutBtn = document.querySelector('#logged-in button');

const CLASS_HIDDEN = 'visually-hidden';
const GREETING_NAME_KEY = 'greeting';

// Login functionality
function setNameInLocalStorage(name) {
    localStorage.setItem(GREETING_NAME_KEY, name);
}

function removeNameFromLocalStorage() {
    localStorage.removeItem(GREETING_NAME_KEY);
}

function getNameFromLocalStorage() {
    return localStorage.getItem(GREETING_NAME_KEY);
}

function updateUIForLoggedInState(name) {
    const msg = `Hello, ${name}!`;
    showName.innerText = msg;
    loginForm.classList.add(CLASS_HIDDEN);
    loggedIn.classList.remove(CLASS_HIDDEN);
}

function updateUIForLoggedOutState() {
    loginForm.classList.remove(CLASS_HIDDEN);
    loggedIn.classList.add(CLASS_HIDDEN);
}

function login(event) {
    event.preventDefault();

    const name = loginInput.value || getNameFromLocalStorage();

    if (name !== null && name !== '') {
        setNameInLocalStorage(name);
        updateUIForLoggedInState(name);
    }
}

function logout() {
    removeNameFromLocalStorage();
    updateUIForLoggedOutState();
}

function setGreetingState() {
    const name = getNameFromLocalStorage();
    if (name !== null && name !== '') {
        updateUIForLoggedInState(name);
    } else {
        updateUIForLoggedOutState();
    }
}

// Event listeners
logoutBtn.addEventListener('click', logout);
loginForm.addEventListener('submit', login);

// Initialize the UI based on login state
setGreetingState();
