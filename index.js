// Part 2 Condition

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
// let a = 0, 
//     b = 1, 
//     c = '1';

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

// Number 5
// Créer un fonction qui Vérifie si un triangle est équilatéral, scalène ou isocèle
// La fonction `findTriangleType()` permet de trouver le type de triangle pour des valeurs de côté données.
function findTriangleType(sideA, sideB, sideC){
    if (sideA === sideB && sideB === sideC) {
         console.log('le triangle est équilatéral')
        } else if(sideA !== sideB && sideB !== sideC && sideA !== sideC) {
            console.log('le triangle est scalène')
        } else {
            console.log('le triangle est isocèle')
        }
};
findTriangleType(170, 170, 170);


// Number 6
// Créer une fonction `evalNumbers()` imprime le résultat après avoir évalué les opérations arithmétiques entre deux nombres 
// de l'addition, de la multiplication, de la division, et du module en JavaScript.

// Imprimer le résultat de num1+num2 si l'opération est "add" (addition)

// Imprimer le résultat de num1-num2 si l'opération est "subtract" (soustraire)

// Imprimer le résultat de num1*num2 si l'opération est "multiplier".

// Imprimer le résultat de num1/num2 si l'opération est "diviser".

// Imprimer le résultat de num1%num2 si l'opération est "modulus".

// Sinon, imprimer "Opération non valide".
function evalNumbers(num1, num2, operation){

        switch (operation) {
            case "add" :
                console.log(num1 + num2);
                break;
            case "subtract" : 
                console.log(num1 - num2);
                break;
            case "multiplier" :
                console.log(num1 * num2);
                break;
            case "diviser" : 
                console.log(num1 / num2);
                break;
            case "modulus" :
                console.log(num1 % num2);
                break;
            default :
                console.log("Opération non valide");
    };
};
evalNumbers(30, 70, "multiplier");

// Number 7
// Créer la fonction `checkLeapYear()` pour savoir si l'année donnée est une année bissextile

// Si l'année est divisible par 4 et non divisible par 100, on imprime "année bissextile".

// Ou si l'année est divisible par 400, imprimer "année bissextile".

// Sinon, imprimer "pas une année bissextile".
function checkLeapYear(inputYear) {
    if (inputYear % 4 === 0  &&  inputYear % 100 !== 0) {
        console.log("Leap year")
    }else if(inputYear % 400 === 0){
        console.log("Leap year")
    }else{
        console.log("Not a leap year")
    }

};
checkLeapYear(2011);

// Numéro 8 
// La fonction `findDaysInMonth()` trouve le nombre de jours dans un mois donné d'une année.

// Si le mois n'est pas compris entre 1 et 12, elle imprime "Invalid month".

// Si le mois est égal à 2, c'est-à-dire février, il faut imprimer "29 jours" si l'année est bissextile,
// sinon il faut imprimer "28 jours".

// Si le mois est égal à 4, 6, 9 ou 11, imprimer "30 jours".

// Sinon, imprimer "31 jours".
function findDaysInMonth (inputMonth, inputYear) {
if (inputMonth < 1 || inputMonth > 12) {
    console.log("Invalid month")
}else if(inputMonth === 2) {
    if (inputYear % 4 === 0  &&  inputYear % 100 !== 0) {
        console.log("29 jours")
    }else if(inputYear % 400 === 0){
        console.log("29 jours")
    }else{
        console.log("28 jours")
    };
} else if(inputMonth === 4 || inputMonth === 6 || inputMonth === 9 || inputMonth === 11 ) {
    console.log("30 jours")
}else{
    console.log("31 jours")
}
};
findDaysInMonth (2,2004)

// Part 3 Array

// Number 1 
// Ecrivez une fonction JavaScript pour vérifier si une "entrée" est un tableau ou non.
function checkArrayInput(input){
   return Array.isArray(input);
};
console.log(checkArrayInput([1, 2, 3]));

// Number 2
// Écrivez une fonction JavaScript pour obtenir le premier élément d'un tableau. 
// En passant le paramètre "n", la fonction renverra les "n" premiers éléments du tableau.
function getFirstElementsOfAnArray(n){
    return n[0]
}
console.log(getFirstElementsOfAnArray([23, 34, 56]));