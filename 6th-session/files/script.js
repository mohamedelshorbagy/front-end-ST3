/**
 * 
 * Hoisting
 * 
 */

// console.log(a);
// var a = 2;
// var a; // Formal Declarions

// function foo() {
//     function bar() {
//         return 8;
//     }
//     var bar;
//     console.log(bar());
//     bar = function () {
//         return 3;
//     }
// }


// foo();

// var a = add(1, 2);

// 'use strict';
// function foo() {
//     var a = 3;
//     function bar(c) {
//         z = 10;
//         console.log(a, b, c, z);
//     }
//     var b = 2;
//     bar(b * 8);
// }

// foo();
// console.log(z);



/**
 * 
 * Closure
 * 
 */

// function foo() {
//     var x = 3;
//     function bar() {
//         return x; 
//     }

//     return bar;
// }



// var data = foo();
// console.log(data());



/**
 * 
 * 
 * Timer Functions/ Async Operations
 * 
 */


// console.log(1);
// setTimeout(function () {
//     console.log(2);
// }, 0)
// console.log(3);



// IIFE
// Immeditely Invoked Function Expression

// (function IIFE() {
//     console.log('Hello, World!');
// })();


/**
 * 
 * Interview Question
 * 
 */
// 'use strict';
// (function IIFE() {
//     var a = 3; 
//     b = 3;
// })();

// console.log('value of a', a);
// console.log('value of b', b);






// for (var i = 0; i <= 5; i++) {
//     (function IIFE(j) {
//         setTimeout(function () {
//             console.log(j);
//         }, j * 1000);
//     })(i)
// }


// for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }


/**
 * 
 * TDZ ==> Temporal Dead Zone
 * 
 */
// a = 2;
// console.log(a);
// let a;
// const a = [1,2,3];
// a[0] = 8
// console.log(a);


// for (let i = 0; i < 2; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 0);
//     i++;
// }


// for (
//     let i = (
//         setTimeout(function () { console.log(i) }),
//         0
//     );
//     i < 2;
//     i++
// ) {
//     setTimeout(function () { console.log('[LOOP]', i) }),
//         i++;
// }

















































