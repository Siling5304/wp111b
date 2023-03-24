function isPrime(n){
    if(n<=1){
        return false; 
    }
    for(var i=2;i<=n-1;i++){
        if(n%i === 0){
           return false;
        }
    }
    return true;
}

  
console.log("isPrime(1)="+isPrime(1));
console.log("isPrime(17)="+isPrime(17));