const images = [
    './background/a.jpg',
    './background/b.jpg',
    './background/c.jpg',
    './background/d.jpg',
    './background/e.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(${chosenImage})`;
document.body.style.backgroundSize = '100vw 100vh';
