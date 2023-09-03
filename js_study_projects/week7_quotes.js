const quotes = [
    {
        quote: 'All our dreams can come true, if we have the courage to pursue them.',
        author: 'Walt Disney',
    },
    {
        quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
        author: 'Chinese Proverb',
    },
    {
        quote: 'I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.',
        author: 'Leah Busque',
    },
    {
        quote: 'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',
        author: 'Neil Gaiman',
    },
    {
        quote: 'Everything you can imagine is real.',
        author: 'Pablo Picasso',
    },
    {
        quote: 'Do one thing every day that scares you.',
        author: 'Eleanor Roosevelt',
    },
    {
        quote: 'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.',
        author: 'Socrates',
    },
    {
        quote: 'Do what you feel in your heart to be right―for. you’ll be criticized anyway.',
        author: 'Eleanor Roosevelt',
    },
    {
        quote: 'Don’t be afraid to give up the good to go for the great.',
        author: 'John D. Rockefeller',
    },
    {
        quote: 'The hard days are what make you stronger.',
        author: 'Aly Raisman',
    },
    {
        quote: 'If opportunity doesn’t knock, build a door.',
        author: 'Kurt Cobain',
    },
    {
        quote: 'In the middle of every difficulty lies opportunity.',
        author: 'Albert Einstein',
    },
];

const quote = document.querySelector('#quote p:first-child');
const author = document.querySelector('#quote p:last-child');

function selectQuote() {
    const num = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[num].quote;
    author.innerText = `- ${quotes[num].author}`;
}

selectQuote();
setInterval(selectQuote, 3000);
