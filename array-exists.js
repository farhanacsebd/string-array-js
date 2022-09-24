function bestfriends(friends){
    if(Array.isArray(friends)==false){
        return 'provide an array'
    }
    let max = friends[0];
    for(const friend of friends){
        if(friend.length>max.length){
            max = friend;
        }
    }
    return max;
}
const friends =['farhana','nimki','adrita','tirtho','turkiministhan'];
const bigBuddy = bestfriends(1113);
console.log(bigBuddy);


/* function bestFriend(friendNames){

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
console.log(namesIs.length); */