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

const area = (rad) => {
  return 3.14 * rad *2;
};

const circleArea = area(7);
console.log('The area of the circle is', circleArea)

const greet = () => 'hello world';

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
}

console.log(bill([20,30,40], 0.3))