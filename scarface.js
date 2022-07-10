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

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you just clicked me')
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');
    e.target.style.textDecoration = 'line-through'
  });
});