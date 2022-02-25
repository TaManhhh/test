function findOppositeNumber(n,num){
    if(4 <=n<=20 && 0<= num <=(n-1) && n%2==0){
        let half= n/2
        if(num< half){
            return num + half;
        }
        else{
            return num -half;
        }
    }
}
console.log(findOppositeNumber(10,2))
// console.log(findOppositeNumber(10,6))