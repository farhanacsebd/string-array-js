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
    // output.push(product);
   }
}
// console.log(output);


/* for(const product of products){
    if(product.toLowerCase().includes(search.toLowerCase())){
        output.push(product)
    }
}
console.log(output); */

for(const product of products){
    if(product.toLowerCase().startsWith(search.toLowerCase())){
        output.push(product)
    }
}
console.log(output);


