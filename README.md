# js-string-array

### case-convert:

#### Forces all parameters to be toUpperCase() and toLowerCase()

```javascript
const userInput = "blackPinK";
const namePro = "blackpink";
// console.log(namePro.toUpperCase());
if (userInput.toUpperCase() == namePro.toUpperCase()) {
  console.log("user exists");
}
```

### Apply Search includes, indexOf, startswith, endswith

- indexOf or includes are both the same type function.
- startswith see only the starting product name.
- endswith see only last of the product search name.

```javascript
const products = [
  "Dell hardcore i29 200GB processor laptop",
  "iPhone 1TB camera Phone",
  "yellow laptop with black camera",
  "1X59 Lenova cammercial yopa laptop",
  "purpel color phone with LapTop",
  "LG supernova laptop",
  "Lava smart phone",
  "corei7 laptop",
  "Grammin Phone",
];

const search = "laptop";

const output = [];

// indexOf
for (const product of products) {
  if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
    output.push(product);
  }
}
console.log(output);
```

`includes`

```javascript
const products = [
  "Dell hardcore i29 200GB processor laptop",
  "iPhone 1TB camera Phone",
  "yellow laptop with black camera",
  "1X59 Lenova cammercial yopa laptop",
  "purpel color phone with LapTop",
  "LG supernova laptop",
  "Lava smart phone",
  "corei7 laptop",
  "Grammin Phone",
];

const search = "Phone";

const output = [];

// includes
for (const product of products) {
  if (product.toLowerCase().includes(search.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
```

`startsWith`

```javascript
const products = [
  "Dell hardcore i29 200GB processor laptop",
  "iPhone 1TB camera Phone",
  "yellow laptop with black camera",
  "1X59 Lenova cammercial yopa laptop",
  "purpel color phone with LapTop",
  "LG supernova laptop",
  "Lava smart phone",
  "corei7 laptop",
  "Grammin Phone",
];

const search = "dell";

const output = [];

// startsWith
for (const product of products) {
  if (product.toLowerCase().startsWith(search.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
```

`endsWith`

```javascript
const products = [
  "Dell hardcore i29 200GB processor laptop",
  "iPhone 1TB camera Phone",
  "yellow laptop with black camera",
  "1X59 Lenova cammercial yopa laptop",
  "purpel color phone with LapTop",
  "LG supernova laptop",
  "Lava smart phone",
  "corei7 laptop",
  "Grammin Phone",
];

const search = "dell";

const output = [];

// endsWith
for (const product of products) {
  if (product.toLowerCase().endsWith(search.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
```

### How to split, slice, substr, substring, concat, join:

- Splits a string into an array of smaller substrings.

```javascript
const anthum = "Amar Sonar Bangla Ami Tomake Valobashi";
// split
const words = anthum.split(" ");
console.log(words);
```

- Slice Extracts a small portion of a string and returns it.

```javascript
const anthum = "Amar Sonar Bangla Ami Tomake Valobashi";
// slice
const smallSlice = anthum.slice(2, 10);
console.log(smallSlice);
```

- It will return as many calls starting from a position.
  example- a b c d e f j h
  (7,4)= e f

```javascript
const anthum = "Amar Sonar Bangla Ami Tomake Valobashi";
// substr
const anotherPart = anthum.substr(11, 7);
console.log(anotherPart);
```

- substring or slice both are same.

```javascript
const anthum = "Amar Sonar Bangla Ami Tomake Valobashi";
// substring
const anotherAnotherPart = anthum.substring(2, 10);
console.log(anotherAnotherPart);
```

- concat() join all the string.

```javascript
// concat
const first = "Amar";
const second = "City";
// const fullString = first + second;
const fullString = first.concat(second).concat("@gmail");
console.log(fullString);
```

- join() converts all string elements to an array.

```javascript
// join()

const words2 = ["a", "b", "c", "d"];
// const fullJoins = words2.join('');
// const fullJoins = words2.join(' ');
// const fullJoins = words2.join(',');
const fullJoins = words2.join(", ");
console.log(fullJoins);
```

## Array using isArray, indexOf, includes, concat:

#### isArray-

```javascript
function bestfriends(friends) {
  if (Array.isArray(friends) == false) {
    return "provide an array";
  }
  let max = friends[0];
  for (const friend of friends) {
    if (friend.length > max.length) {
      max = friend;
    }
  }
  return max;
}
const friends = ["farhana", "nimki", "adrita", "tirtho", "turkiministhan"];
const bigBuddy = bestfriends(1113);
console.log(bigBuddy);
```

- indexOf or includes.

```javascript
if (friends.indexOf("adrita") != -1) {
  console.log("adrita exits");
}

// includes

if (friends.includes("nimki")) {
  console.log("nimki exits");
}
```

- concat.

```javascript
const first1 = [2, 4, 6, 7, 2, 3];
const second = [55, 44, 24, 78, 61];
console.log(first1.concat(second));
```

### Array slice or splice.

```javascript
const number1 = [33, 534, 24, 76, 89, 90, 06, 46];

// slice
console.log(number1.slice(3, 7)); //[76, 89, 90, 6]

// splice
console.log(number1.splice(3, 5)); //[ 76, 89, 90, 6, 46 ]

console.log(number1.splice(3, 4));
console.log(number1); // [ 76, 89, 90, 6 ]
//after splice,the array list is now -  [ 33, 534, 24, 46 ]

// added number of list
console.log(number1.splice(3, 0, 222, 336, 553, 2178)); //[]
console.log(number1); // [   33, 534,   24, 222,336, 553, 2178,  76,89,  90,    6,  46]
```

### Sorting of an array.

#### 0-9 / string you may easily sort.but more number like 10 to unlimited then you can't sort easily.You need to code differently.

```javascript
// easy way:
const arr1 = [6, 9, 8, 1, 2, 5, 3, 7, 4, 0];
console.log(arr1.sort()); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const arr2 = ["kabir", "jarim", "kikur", "ayara", "bib"];
console.log(arr2.sort()); //[ 'ayara', 'bib', 'jarim', 'kabir', 'kikur' ]
```

- A different way of sort.

```javascript
const arr3 = [22, 53, 767, 234, 43, 15, 75, 89];
arr3.sort(function (a, b) {
  return a - b;
});
console.log(arr3); //[15, 22,  43,  53,75, 89, 234, 767]
```

- reverse.

```javascript
const arr2 = ["kabir", "jarim", "zikur", "ayara", "bib", "sakib"];

console.log(arr2.reverse()); //[ 'sakib', 'bib', 'ayara', 'zikur', 'jarim', 'kabir' ]
console.log(arr2.sort().reverse()); //[ 'zikur', 'sakib', 'kabir', 'jarim', 'bib', 'ayara' ]
```

### Arguments:

```javascript
function result(num1, num2) {
  // console.log(arguments[1]);
  let sum = 0;
  for (let num of arguments) {
    sum = sum + num;
  }

  return sum;
}

console.log(result(33, 22, 10, 6, 8, 12)); //91
```
