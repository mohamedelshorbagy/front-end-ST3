/**
 * Types: 
 *  * Primitive Types:
 *  * Number
 *  * String
 *  * Boolean
 *  
 *  * Non-Primitive Types:
 *  * Object => { key: 123 } / [1,2,3]
 *  * Undefined
 *  
 * 
 *  * Symbols - ES6
 * 
 */



// var a = 2;
// console.log(0, typeof typeof typeof a);


// var a = 2;
// console.log(0, typeof a);
// var a; // * Re-Declaration
// console.log(0, typeof a);
// var b;
// console.log(0, typeof b);
// var c = { key: 123 };
// console.log(0, typeof c);
// c = [1, 2, 3];
// console.log(0, typeof c);

/**
 * * Number
 * 
 */
// var a = "2" - 0; // Implicit Coercion
// var a = "2" * 1; // Implicit Coercion
// var a = "2" / 1; // Implicit Coercion
// var a = +"2"; // Implicit Coercion
// var a = Number("2"); // Explicit Coercion
// console.log(0, Number(a));
// console.log(0, a);



// console.log(0, Number(0))
// console.log(0, Number(''))
// console.log(0, Number('2'))
// console.log(0, Number(1))
// console.log(0, Number(false))
// console.log(0, Number(true))
// console.log(0, Number('0xAB'))
// console.log(0, Number('0101'))
// console.log(0, Number('0b0101'))

// console.log(0, Number([]))
// console.log(0, Number([1, 2, 3]))
// console.log(0, Number([5]))
// console.log(0, Number([1, 2, , , , , , , , , , , , , , , , , 2]))
// console.log(0, Number([1, [[[[[[[2]]]]]]], , , , , , , , , , , , , , , , , 2]))
// console.log(0, Number([[[[[[[[[[[[[[6]]]]]]]]]]]]]]))
// console.log(0, Number([[[[[[[1, 2, 3, , , , [[[[[[[6]]]]]]]]]]]]]]))
// console.log(0, Number([undefined, null, 2]))
// console.log(0, Number(["3.5"]))
// console.log(0, Number(null))
// console.log(0, Number(undefined))
// console.log(0, Number([undefined]))
// console.log(0, Number([null]))

// console.log(0, Number({ key: 1 }));
// console.log(0, Number("foo"));
// console.log(0, Number("2.5foo"));
// console.log(0, Number("2foo"));

/**
 *
 * * NaN
 */
// var a = NaN;
// console.log(0, typeof a);


// console.log(0, isNaN(0))
// console.log(0, isNaN(''))
// console.log(0, isNaN('2'))
// console.log(0, isNaN(1))
// console.log(0, isNaN(false))
// console.log(0, isNaN(true))
// console.log(0, isNaN('foo'))
// console.log(0, isNaN('2.5'))
// console.log(0, isNaN([1]))
// console.log(0, isNaN([1,,23,,,3]))
// console.log(0, isNaN({ key: 123 }))
// console.log(0, isNaN(NaN))
// console.log(0, isNaN(null))
// console.log(0, isNaN(undefined))


// PolyFills
// window.isNaN = function(x) {
//     return 2;
// }
// PonyFills

function checkNaN(x) {
  return x != x;
}


// console.log(0, checkNaN(0))
// console.log(0, checkNaN(''))
// console.log(0, checkNaN('2'))
// console.log(0, checkNaN(1))
// console.log(0, checkNaN(false))
// console.log(0, checkNaN(true))
// console.log(0, checkNaN('foo'))
// console.log(0, checkNaN('2.5'))
// console.log(0, checkNaN([1]))
// console.log(0, checkNaN([1, , 23, , , 3]))
// console.log(0, checkNaN({ key: 123 }))
// console.log(0, checkNaN(NaN))
// console.log(0, checkNaN(null))
// console.log(0, checkNaN(undefined))







/**
 *
 * * String
 *
 */

// var a = 2 + "";
// console.log(0, String(a));
// console.log(0, a);



// console.log(0, String(0))
// console.log(0, String('foo'))
// console.log(0, String(''))
// console.log(0, String('2'))
// console.log(0, String(1))
// console.log(0, String(false))
// console.log(0, String(true))
// console.log(0, String(null))
// console.log(0, String(undefined))
// console.log(0, String(NaN))
// console.log(0, String(function sum() { return "foo" }))
// console.log(0, String('0xAB'))
// console.log(0, String('0101'))
// console.log(0, String('0b0101'))

// console.log(0, String([]))
// console.log(0, String([5]))
// console.log(0, String([1, 2, 3]))
// console.log(0, String([1, 2, , , , , , , , , , , , , , , , , 2]))
// console.log(0, String([1, [[[[[[[2]]]]]]], , , , , , , , , , , , , , , , , 2]))
// console.log(0, String([[[[[[[[[[[[[[6]]]]]]]]]]]]]]))
// console.log(0, String([[[[[[[1, 2, 3, , , , [[[[[[[6]]]]]]]]]]]]]]))
// console.log(0, String(["3.5"]))
// console.log(0, String([undefined]))
// console.log(0, String([null]))
// console.log(0, String([undefined, null, 2]))

// console.log(0, String({
//     user: {
//         name: 'Mohamed',
//         age: 123,
//         arr: [undefined, null, 5]
//     }
// }));


// console.log(0, String({ key: 123 }))
// console.log(0, String([undefined, NaN, 2, [undefined, null], { key: 123 }]))



/**
 *
 * Interview Question
 *
 */


// var a = {};
// var b = { key: 123 };
// var c = { key: 456 };

// a[b] = 896;
// a[c] = 654;

// console.log(0, a);




/**
 *
 * * Boolean
 *
 */

/**
 *    * Falsy Table                     * Truthy Table
 *
 *      false
 *      0,-0,+0
 *      undefined
 *      null
 *      NaN
 *      ''
 *
 *
 */


// var a =  Boolean("2");
// var a =  !!"2";
// console.log(0, a);


// console.log(0, Boolean(0))
// console.log(0, Boolean('foo'))
// console.log(0, Boolean(''))
// console.log(0, Boolean('2'))
// console.log(0, Boolean(1))
// console.log(0, Boolean(false))
// console.log(0, Boolean(true))
// console.log(0, Boolean(null))
// console.log(0, Boolean(undefined))
// console.log(0, Boolean(NaN))
// console.log(0, Boolean(function sum() { return "foo" }))
// console.log(0, Boolean('0xAB'))
// console.log(0, Boolean('0101'))
// console.log(0, Boolean('0b0101'))

// console.log(0, Boolean([]))
// console.log(0, Boolean([5]))
// console.log(0, Boolean([1, 2, 3]))
// console.log(0, Boolean([1, 2, , , , , , , , , , , , , , , , , 2]))
// console.log(0, Boolean([1, [[[[[[[2]]]]]]], , , , , , , , , , , , , , , , , 2]))
// console.log(0, Boolean([[[[[[[[[[[[[[6]]]]]]]]]]]]]]))
// console.log(0, Boolean([[[[[[[1, 2, 3, , , , [[[[[[[6]]]]]]]]]]]]]]))
// console.log(0, Boolean([undefined]))
// console.log(0, Boolean([null]))
// console.log(0, Boolean([undefined, null, 2]))
// console.log(0, Boolean(["3.5"]))

// console.log(0, Boolean({
//     user: {
//         name: 'Mohamed',
//         age: 123,
//         arr: [undefined, null, 5]
//     }
// }));


// console.log(0, Boolean({ key: 123 }))
// console.log(0, Boolean([undefined, NaN, 2, [undefined, null], { key: 123 }]))



// var a = (![] + [])[+[]] +
//   (![] + [])[+!+[]] +
//   ([![]] + [][[]])[+!+[] + [+[]]] +
//   (![] + [])[!+[] + !+[]];


// console.log(0, a);



/**
 *
 * Abstarct Equality Algorithm
 * :-> ==
 * ES Specs -> 11.9
 */

/**
 *
 * *  * == Number
 * * Number == *
 *  * ==> Number
 *
 */

/**
 *
 * * Rule 1: Number Vs. String
 *
 */
// var a = 0 == '';
// var a = 0 == '0';
// console.log(0, a);

/**
 *
 * * Rule 2: Number Vs. Boolean
 *
 */

// var a = 0 == false;
// var a = 1 == true;
// console.log(0, a);



/**
 *
 * * Rule 3: String Vs. Boolean
 *
 */
// var a = false == '';
// console.log(0 ,a);

/**
 *
 * * Rule of Non-Primitives
 * valueOf
 * toString
 *
 */




// console.log(0 == []);
// console.log(0 == {});
// console.log(0 == [0]);
// console.log(0 == undefined)
// console.log(0 == null)
// console.log('0' == null)
// console.log('0' == undefined)
// console.log('0' == false)
// console.log(0 == false)
// console.log('0' == [0]);
// console.log(null == null);
// console.log(null == undefined);
// console.log(undefined == undefined);
// console.log(false == undefined);
// console.log(false == null);
// console.log('' == 0);
// console.log('' == false);
// console.log('' == []);
// console.log('' == {});
// console.log('' == [0]);
// console.log('' == null);
// console.log('' == undefined);
// console.log([null] == null);
// console.log([null] == [null]);
// console.log([undefined] == [null]);
// console.log([undefined] == [undefined]);



/**
 * X ==> undefined, null
 * 
 *  if Y:
 *       * null, undefined ===> true
 *       else ===> false 
 * 
 */

 /**
  * 
  * Rule of Arrays
  * 
  */

// var a = [1,2,3];
// console.log(0, a == a);




// 3 > 2 > 1
// 3 < 2 < 1


/**
 * 
 * Strict Equality Algorithm
 * :-> ====
 * Doesn't Coerce
 * 
 */
var a = '' === false // false








