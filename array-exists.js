
function bestfriends(friends){
    const max = friends[0];
    for(let friend of friends){
        // console.log(friend);
        if(friend.length>max.length){
            max = friend;
        }
    }
    return max;
}
const friendsName =bestfriends(['farhana','nimki','adrita','tirtho']);
console.log(friendsName);


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