let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainT = document.querySelector('#main-title')

  // Part 2
  let body = document.querySelector('body')
  body.style.backgroundColor = '#8170FF'
  // Part 3
  let domFTL = document.querySelector('#favorite-things')
  domFTL.childNodes[11].remove()

  // Part 4
  let specialT = document.querySelectorAll('.special-title')
  for (let ele of specialT) {
    ele.style.fontSize = '2rem'
  }

  // Part 5
  let pastRaces = document.querySelector('#past-races')
  pastRaces.childNodes[7].remove()

  // Part 6
let newElement = document.createElement('li')
 newElement.innerText = 'New York'
 pastRaces.appendChild(newElement)

  // Part 7
let newDiv = document.createElement('div')
newDiv.classList.add('blog-post')
newDiv.classList.add('purple')
newDiv.innerHTML = '<h1> New york </h1> <p> I raced through new York </p>'
let main = document.querySelector('.main')
main.appendChild(newDiv)

  // Part 8
  let quoteTitle = document.querySelector('#quote-title')
  quoteTitle.addEventListener('click', randomQuote)

  // Part 9
  let blogPosts = document.querySelectorAll('.blog-post')
  for (let blogPost of blogPosts){
    blogPost.addEventListener('mouseout', () => {
      blogPost.classList.remove('red')
      blogPost.classList.add('purple')
     })

     blogPost.addEventListener('mouseenter', () => {
      blogPost.classList.remove('purple')
      blogPost.classList.add('red')
    })
  }



});
