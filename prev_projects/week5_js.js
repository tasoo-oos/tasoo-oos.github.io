function changeTagName(element, newTagName, eventListeners = []) {
    // Create a new element with the specified tag name
    let newElement = document.createElement(newTagName);

    // Copy attributes from the old element to the new one
    for (let i = 0; i < element.attributes.length; i++) {
        let attr = element.attributes[i];
        newElement.setAttribute(attr.name, attr.value);
    }

    // Copy children from the old element to the new one
    while (element.firstChild) {
        newElement.appendChild(element.firstChild);
    }

    // Replace the old element with the new one in the DOM
    element.parentNode.replaceChild(newElement, element);

    // Re-attach event listeners
    for (const { type, listener, options } of eventListeners) {
        newElement.addEventListener(type, listener, options);
    }

    return newElement;
}

const tagNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

// Define event listeners
const eventListeners = [
    {
        type: 'click',
        listener: (e) => {
            // Calculate the next tag name
            const nowTagName = (tagNames.indexOf(e.currentTarget.localName) + 1) % tagNames.length;

            changeTagName(e.currentTarget, tagNames[nowTagName], eventListeners);
        },
        options: false,
    },
    // Add other event listeners as needed
];

function switchColors(e) {
    const colors = ['greenyellow', 'cyan', 'magenta'];
    const now = e.currentTarget;
    for (let i = 0; i < colors.length - 1; i++) {
        if (now.classList.contains(colors[i])) {
            now.classList.remove(colors[i]);
            now.classList.add(colors[i + 1]);
            return;
        }
    }

    now.classList.remove(colors[colors.length - 1]);
    now.classList.add(colors[0]);
}

function switchColorsUsingStyle(e) {
    const now = e.currentTarget;
    if (now.style.backgroundColor == '') {
        now.style.backgroundColor = 'green';
    } else if (now.style.backgroundColor == 'green') {
        now.style.backgroundColor = 'blue';
    } else if (now.style.backgroundColor == 'blue') {
        now.style.backgroundColor = 'red';
    } else {
        now.style.backgroundColor = '';
    }
}

// Change the tag and re-attach event listeners
const grabs = document.getElementsByClassName('hello');
for (let i = 0; i < grabs.length; i++) {
    grabs[i].addEventListener(eventListeners[0].type, eventListeners[0].listener, eventListeners[0].options);
    grabs[i].children[0].addEventListener('mouseover', i % 2 == 0 ? switchColors : switchColorsUsingStyle);
}

const them2 = document.querySelector('.container h1:nth-child(2)');
them2.addEventListener(eventListeners[0].type, eventListeners[0].listener, eventListeners[0].options);

const them1 = document.querySelector('.container h1:first-child');
const them3 = document.querySelector('.container h1:last-child');

them1.addEventListener('click', switchColors);
them3.addEventListener('click', switchColors);

window.addEventListener('resize', () => {
    const body = document.body;
    const color = body.style.backgroundColor;

    if (!color) {
        body.style.backgroundColor = 'rgb(0, 255, 0)';
        return; // exit the function since we just set the color
    }

    const rgbValues = color.match(/rgb\((\d+), (\d+), (\d+)\)/);

    if (rgbValues) {
        const [_, red, green, blue] = rgbValues;

        const newGreen = (parseInt(green) - 8 + 256) % 256; // ensure it doesn't go below 0

        body.style.backgroundColor = `rgb(${red}, ${newGreen}, ${blue})`;
    }
});
