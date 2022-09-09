# js-string-array
### case-convert:
#### Forces all parameters to be toUpperCase() and toLowerCase() 
```javascript
const userInput = 'blackPinK';
const namePro ='blackpink';
// console.log(namePro.toUpperCase());
if(userInput.toUpperCase() == namePro.toUpperCase()){
    console.log('user exists');
}
```


### Apply Search includes, indexOf, startswith, endswith
- indexOf or includes are both the same type function.
- startswith see only the starting product name.
- endswith see only last of the product search name.

```javascript
const products =[
    'Dell hardcore i29 200GB processor laptop',
    'iPhone 1TB camera Phone',
    'yellow laptop with black camera',
    '1X59 Lenova cammercial yopa laptop',
    'purpel color phone with LapTop',
    'LG supernova laptop',
    'Lava smart phone',
    'corei7 laptop',
    'Grammin Phone'
]

const search = 'dell';

const output =[];

// indexOf
for(const product of products){
   if(product.toLowerCase().indexOf(search.toLowerCase())!=-1){
    output.push(product);
   }
}
console.log(output);
```
```javascript
const products =[
    'Dell hardcore i29 200GB processor laptop',
    'iPhone 1TB camera Phone',
    'yellow laptop with black camera',
    '1X59 Lenova cammercial yopa laptop',
    'purpel color phone with LapTop',
    'LG supernova laptop',
    'Lava smart phone',
    'corei7 laptop',
    'Grammin Phone'
]

const search = 'dell';

const output =[];

// includes
for(const product of products){
    if(product.toLowerCase().includes(search.toLowerCase())){
        output.push(product)
    }
}
console.log(output);
```