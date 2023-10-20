// 1. Declare a variable firstname and initialize it with the value 'Lata'.
// const firstName = 'Lata';
 	
// 2. Which value does x have after execution of the following code? let x = 'Geeta';

// let x = 'Geeta';
// console.log(x);
// Output: Geeta

// 3. Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'.
// const flower = 'rose';
// const tree = 'maple';

// 4. Which value does x have after execution of the following code?
// let x = 'Tic';
// x = 'Tac';
// x = 'Toe';
// console.log(x);
// after execution of this code x will have 'Toe' like value

// 5. Which value does x have after execution of the following code?                            
// let x = 'Laurel';
// let y = 'Hardy';
// let z = y;
// y = x;
// x = z;
// console.log(x);
// after execution of this code x will have 'Hardy' like value

// 6.  Define a function hello that returns 'Hello world!'
// function hello() {
//     return 'Hello world!';
// };
// 7. Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.
// function firstFunction() {
//     return 'Hello a!';
// };
// function secondFunction() {
//     return 'Hello b!';
// };

// 8 Define a function greet returning the value  'Haydo!'   
// Declare a variable salutation Call the function greet and assign the result of the call to the variable salutation.
// function greet(){
//     return 'Haydo!';
// }
// const salutation = greet();
// console.log(salutation);
// 9. Define a function hello returning the value  'Hi!'
// Declare a variable x Call the function hello and assign the result of the call to the variable x.
// function hello() {
//     return 'Hi!';
//   };
  
//   let x = hello();
//   console.log(x);
// 10. Write a function echo that also returns the passed parameter. echo('Greta') 
// should return 'Greta' and echo('CO2') should return 'CO2'
// function echo(Greta){
//     return 'Greta';
// };
// function echo(CO2){
//     return 'CO2';
// };


// Second part of JavaScript exercice
// Number 1
let a = 0, 
    b = 1, 
    c = '1';

// Que vaut (a === 0); R/ true         
// Que vaut (a === 1); R/ false
// Que vaut (a === b); R/ false
// Que vaut (a === 0 && b === 1); R/ true
// Que vaut (a === 0 && b === 0); R/ false
// Que vaut (a === 0 || b === 0); R/ true
// Que vaut (b === c); R/ false
// Que vaut (b == c); R/ true
// Que vaut (a < b);  R/ true
// Que vaut (a >= b);  R/ false
// Que vaut (a !== b); R/ true
// Que vaut (a === 0 && (b === 1 || b === 2)) R/ true
// Que vaut (a === 0 && true) R/ true
// console.log(a === 0 && true);

// Number 2.  	
// Ecrivez une fonction qui prend 3 paramètres (mots).

// Concaténez les trois variables et vérifiez si sa taille est 
// suppérieure à 100 alors affichez "C'est une grande phrase" 
// sinon affichez "C'est une petite phrase".
function checkSizeOfPhrase(firstWord, secondWord, third){
    const concatPhrase = firstWord + secondWord + third;
    if(concatPhrase.length > 100){
        console.log("C'est une grande phrase");
    }else{
        console.log("C'est une petite phrase");
    }
};
checkSizeOfPhrase('Jethro muluba', 'est un', 'développeur full-Stack');

 
 // Number 3	
// Déclarer et définir 2 variables misteryNumber et myNumber de type number.
// En utilisant uniquement l'opérateur ternaire, on affiche :
// Si les 2 nombres sont égaux Congratulations !
// Sinon
// Si le nombre myNumber est inférieur au nombre misteryNumber, on affiche +
// Sinon on affiche -
const misteryNumber = 0;
const myNumber = 0;
myNumber === misteryNumber ? console.log('Congratulations !') : myNumber < misteryNumber ? console.log('+') : console.log('-');

// Number 4
// Créer une fonction `findLargest()` trouve le plus grand des trois nombres.
function findLargest() {
    const nums = [5, 8, 9];
    const largestNum = Math.max(...nums);
    console.log(largestNum);
}
findLargest();
