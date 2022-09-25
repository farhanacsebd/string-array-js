function result(num1,num2){
    // console.log(arguments[1]);
    let sum=0;
    for(let num of arguments){
        sum =sum + num;
    }

    return sum;
}

console.log(result(33,22,10,6,8,12));
