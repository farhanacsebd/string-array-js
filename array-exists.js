function bestFriend(friendNames){

    let max = friendNames[0];
     
   for(element of friendNames){
    
    // console.log(element);
    if(element.length > max.length){
      
        max=element;
    }
   }
   return max;
}

console.log(bestFriend(['nim','Farhana','binte','THasan','Tazakistan']));


let namesIs ="Tazakistan";
console.log(namesIs.length);