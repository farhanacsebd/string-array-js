// split
const anthum = 'Amar Sonar Bangla Ami Tomake Valobashi';
const words=anthum.split(' ');
// console.log(words);

// slice
const smallSlice = anthum.slice(0,10)
// console.log(smallSlice);

// substr
const anotherPart = anthum.substr(2,10)
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthum.substring(2,10)
// console.log(anotherAnotherPart);

// concat
const first = 'Amar';
const second ='City';
// const fullString = first + second;
const fullString = first.concat(second).concat('@gmail')
console.log(fullString);