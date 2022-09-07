const products =[
    'Dell hardcore i29 200GB processor laptop',
    'iPhone 1TB camera Phone',
    'yellow laptop with black camera',
    '1X59 Lenova cammercial yopa laptop',
    'purpel color phone with LapTop',
    'LG supernova laptop',
    'Lava smart phone',
    'corei7 laptop'
]

const shearch = 'laptop';

const output =[];
for(product of products){
   if(product.indexOf(shearch)!=-1){
    output.push(product);
   }
}
console.log(output);