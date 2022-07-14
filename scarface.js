//FOR LOOP

// for(let i = 0; i < 5; i++){
//   console.log(i)
// }

// let names = ['joyce', 'peter', 'mabel']

// for (let i = 0; i < names.length; i++){
//   let html = `<div>${names[i]}</div>`;
//   console.log(html)
// }

//while loops

// let i = 0;

// while(i < 5) {
//   console.log(i);
//   i++
// }

//do while loop

// let i = 0;

// do {
//   console.log(i);
//   i++
// } while(i < 5) 

//if statement

//const password = 'p@ss';

// if(password.length >= 8) {
//   console.log('the password is long enough')
// } else {
//   console.log('change the password')
// }

//password.length >=8 ? 'the password is long enough' : 'change the password'

//FUNCTIONS

//functions expressions

// function great(){
//   console.log('good day')
// }

// great()

//functions decalreation
// const speak = function(){
//   console.log('good morning')
// }

// speak()

//arguments and parameters

// const greeting = function(name, time) {
//   console.log(`good ${time} ${name}`)
// }

// greeting('peter', 'morning')

// returnin values

// const area = function(rad) {
//   return 3.14 * rad **2;
// };

// const circleArea = area(7);
// console.log(circleArea);

// const area = (rad) => {
//   return 3.14 * rad *2;
// };

// const circleArea = area(7);
// console.log('The area of the circle is', circleArea)

// const greet = () => 'hello world';

// const bill = (products, tax) => {
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// console.log(bill([20,30,40], 0.3))




// for each method
// const ul = document.querySelector('.people');

// const people = ['peter', 'joyce', 'mabel', 'nancy', 'theo']

// let html = ``;

// people.forEach(person => {
  // console.log('My name is', person);
//   html += `<li style="color: red">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;



//objects

// let user = {
//   name: 'peter',
//   age: 30,
//   email: 'peteradaaku@gamil.com',
//   location: 'canada',
//   blogs: [
//     { title: 'why is bitcoin te safest asset', likes: 40 },
//     { title: 'invest in bitcooin now', likes: 50}
//   ],
//   logBlogs: function(){
//     console.log('scarface has written the following blogs');
//     this.blogs.forEach(blog => {
//       console.log(blog.title, blog.likes);
//     });
//   }
// };

// user.logBlogs()


//query selector

// const para = document.querySelector('body > div > p:nth-child(1)')

// console.log(para)

// const paras = document.querySelectorAll('p')

// console.log(paras)

// const id = document.getElementById('page-title');

// console.log(id);

// const errors = document.getElementsByClassName('error');

// console.log(errors);

// const para = document.querySelector('p');

// para.innerText += " scar face"

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para.innerText)
//   para.innerText = 'Scar Face'
// });

 //const content = document.querySelector('.content');

//  console.log(content.innerHTML)

// content.innerHTML = 'PETER';

// const people = ['peter', 'scar face', 'mike', 'joyce'];

// people.forEach(person => {
//   content.innerHTML += `<h2>${person}</h2>`
// });



// const link = document.querySelector('a');

// link.getAttribute('href');

// link.setAttribute('href', 'https://www.scarface.com')

// link.innerText = 'go to scar face website'

// link.setAttribute('style', 'color: green')


// const content = document.querySelectorAll('p');

// content.forEach(cont => {
//   if(cont.textContent.includes('error')) {
//     cont.classList.add('error')
//   } else if (cont.textContent.includes('success')) {
//     cont.classList.add('success')
//   }
// })

// console.log(content.classList);

// content.classList.add('error')

const article = document.querySelector('article');

//console.log(Array.from(article.children))

// Array.from(article.children).forEach(child => {
//   child.classList.add('article-element');
// });

// const ul = document.querySelector('ul');

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   ul.innerHTML += '<li>new something</li>'

// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {

//     e.target.remove();
//   });
// });

//ul.addEventListener('click', e => {
  //console.log(e.target)
//   if(e.target.tagName === 'LI') {
//     e.target.remove();
//   }
// })

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//   console.log('my page i copyright');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//   box.textContent = `x position is ${e.offsetX} while y position is ${e.offsetY}`
// })


//POP UP BABY


// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close')

// button.addEventListener('click', () => {
//   popup.style.display = 'block'
// })

// close.addEventListener('click', () => {
//   popup.style.display = 'none'
// })

// popup.addEventListener('click', () => {
//   popup.style.display = 'none'
// })

//FORM SUBMIT

// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');
// const usernamePattern = /^[a-z]{6,12}$/;


// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const username = form.username.value;

//   if(usernamePattern.test(username)) {
//     feedback.textContent = 'accepted'
//   } else {
//     feedback.textContent = 'rejected'
//   }
// });

//LIVE FIELD

// form.username.addEventListener('keyup', e => {
//   if(usernamePattern.test(e.target.value)){
//     form.username.setAttribute('class', 'success')
//   } else {
//     form.username.setAttribute('class', 'error')
//   }
// })

//testing Regex
// const username = 'peter';

// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);


//ARRAY METHODS

// const scores = [10, 30, 15, 25, 40, 5];

// const filteredScores = scores.filter((score) => {
//   return score > 20;
// });

// console.log(filteredScores);

// const users = [
//   {name: 'peter', premium: true},
//   {name: 'joyce', premium: false},
//   {name: 'mabel', premium: false},
//   {name: 'grace', premium: true}
// ];

// const premiumUsers = users.filter((user) => {
//   return user.premium
// });

// console.log(premiumUsers);

//Map Method

// const products = [
//   {name: 'sardine', price: 20},
//   {name: 'milk', price: 40},
//   {name: 'milo', price: 30},
//   {name: 'pringles', price: 10},
//   {name: 'biscuites', price: 50},
// ];

// const newProducts = products.map((product) => {
//   if (product.price > 20) {
//     return {name: product.name, price: product.price / 2}
//   } else {
//     return {name: product.name, price: product.price }
//   }
// });

// console.log(newProducts);

// const scores = [
//   {player: 'peter', score:30},
//   {player: 'john', score:50},
//   {player: 'olive', score:30},
//   {player: 'sandra', score:70},
//   {player: 'peter', score:20}
// ];

// const peterScores = scores.reduce((acc, curr)=> {
//   if(curr.player === 'peter'){
//     acc += curr.score
//   }
//   return acc;
// }, 0);

// console.log(peterScores);


//Array chaining

// const products = [
//   {name: 'sardine', price: 20},
//   {name: 'milk', price: 40},
//   {name: 'milo', price: 30},
//   {name: 'pringles', price: 10},
//   {name: 'biscuites', price: 50},
// ];

// const promos = products
//   .filter(product => product.price > 20)
//   .map(product => `the ${product.name} cost ${product.price / 2}`);

//   console.log(promos);

// const clock = document.querySelector('.clock');

// const tick = () => {

//   const now = new Date();

//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();

//   const html = `
//     <span>${h} hr</span> :
//     <span>${m} mins</span> :
//     <span>${s} secs</span> 
//   `;

//   clock.innerHTML = html;
// };

// setInterval(tick, 1000);



//fetch API

// fetch('todos/peters.json').then((response) => {
//   return response.json();
// }).then(data => {
//   console.log(data)
// }). catch((er) => {

// });


//async and await

// const getTodos = async () => {

//   const res = await fetch('todos/peters.json');
//   const data = await res.json();
  
//   return data;

// };

// getTodos().then(data => console.log(data));

//how to store data 
// localStorage.setItem('name', 'peter');
// localStorage.setItem('age', 50);

//get data
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age)

const todos = [
  {text: 'code java', author: 'scarface'},
  {text: 'barb my hair', author: 'peter'},
  {text: 'cook fried rice', author: 'anderson'}
];

//console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos))