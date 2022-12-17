# Advanced Java Script Concepts

-----Only for learning purpose-----
## ES6
 ECMAScript (ES) version 6 is a more modern form of JavaScript.

 -  First, in ES6 we use the let and const keywords more, and minimal usage of the var keyword.
 - Second in ES6 common usage of template literals. In ReactJS, for example, template literals are used commonly to inject JavaScript right into the HTML structure, which allows React components to behave like
miniature web applications with lives of their own.
 - Third the arrow function. An arrow function has all the same capabilities as a standard JavaScript function, but it's written in a much more succinct syntax.
 - Finally, ES6 will introduce us to two new constructs for working with arrays and objects - the spread operator and rest parameter syntax.

 ----

### Arrow Functions:

 * In vanilla JavaScript, we define functions using the function keyword, followed by the
name of the function and then a set of parentheses.
 * Usually, ES6 arrow functions are defined as constants. This ensures that they can't be overwritten or misused later in the code, and also that they must be defined before being called.
 - Use the => "fat arrow" syntax

for more see arrow.js

---

### The Spread Operator:

Gives us more powerful ways of manipulating JavaScript arrays by using the ... three dots operator in an array. The spread operator is used commonly in modern  JavaScript frameworks, libraries and APIs. It as a safe, modern way to  duplicate part or all an array or object.
- With the spread operator we can make a copy of an array,  copy of an object, or copy just  part of an array or object.  

for more see spread.js

---

### The rest parameter:

Rest Parameter Syntax works in the opposite direction from the spread operator.  
Where the spread operator can break an array into its individual elements, the rest parameter syntax  
combines individual elements into an array. It can  also be used to represent the “rest” of the values  
when destructuring an array or object.

for more see rest.js

---

### Destructuring:

  - Allows us to easily turn an array or object into multiple variables by separating our variable names with commas.
  - Destructuring gives us a faster way to take an array of items and turn those items into distinct, individual variables. Instead of referencing each element of the  array by its index and declaring each variable individually, we can use destructuring  to do it all on a single line of code. The same is true for unpacking - or destructuring - the properties and values of JavaScript objects.    

for more see destructring.js

---

### The map, filter and reduce method:

  - Map, filter and reduce are all designed to be able to accomplish the same things that can be accomplished with a for loop or a while loop, using less code. They are iterator methods, which basically means that they provide a nice, elegant way to iterate through an array of items and perform some action on each item.

#### A callback function:
In the context of these three methods, a callback function is simply a function that we pass as a parameter to the method, which will be called on every element of the array the method is operating on.  

#### The map method:
The map method is called on an array, and takes a single parameter, a callback function, which is a function you  want to execute on every element in the array. The map() method then iterates over the array, calls this callback function on every element, and returns a new array containing all the results of that process. 

example in map.js

#### The filter method:
The second method is filter(). It iterates over an array of items, and filters the  array to only a specified set of results. If you had an array of numbers, you could use filter() to filter the array down to only the even numbers. If you had an array of names, you could filter it to only those names that begin with a certain letter.
Basically, the filter method is for  filtering an array. Like the map method, it does this by taking a callback function as a  parameter. Each item in the array will be passed into the callback function, and if the callback  function returns true when given that element, that element will be included in the results.  Otherwise, the element will be filtered out. When the filter method is complete, the result  is a new array containing the filtered results.

example in filter.js

#### The reduce method:
It reduces all the elements of an array into a single output value, according to a callback function you provide. The simplest usage of this method might be if you wanted to reduce an array of numbers to their total sum. In this case, you would call the reduce() method on the array of numbers, and the callback function you pass as its parameter would serve the purpose of adding  each number to the last and keeping track of the total.

example in reduce.js

#### Summary:
Map is used to execute a function on every element of an array and return a new array of the results, filter is used to filter unwanted elements out  of an array and return an array of only the elements you want, and reduce is used to reduce  all elements of an array to a singular value.

----
