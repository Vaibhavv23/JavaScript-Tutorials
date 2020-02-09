/****************
 * Operator Precedence
 */

 var now = 2020;
 var yearVaibhav = 2002;
 var fullAge = 20;

 // Multiple operators
 var isFullAge = now - yearVaibhav >= fullAge; // follow operator precedence rule.
 console.log(isFullAge);

 // Grouping
 var ageVaibhav = now - yearVaibhav;
 var ageRam = 26;
 var average = (ageVaibhav + ageRam) / 2;
 console.log(average);

 // Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // Assignment operator follow right to left rule.
console.log(x, y); // 26 26

// Multiple Operators
x *= 2;
console.log(x); // 52
x += 10;
console.log(x); // 62
x--;
console.log(x); // 61


