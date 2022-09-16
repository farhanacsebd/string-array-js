
function bestfriends(friends){
    let max = friends[0];
    for(const friend of friends){
        if(friend.length>max.length){
            max = friend;
        }
    }
    return max;
}
const friendsName =bestfriends(['farhana','nimki','adrita','tirtho','turkiministhan']);
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