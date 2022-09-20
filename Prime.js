function primeCheck(num){
    let factor=0;
    for (let i=1;i<=num;i++){
        if(num%i==0){
            factor++;
        }else{
          continue;
        } 
    }
  if(factor==2){
    return true;
  }else{
    return false;
  }
}
let ans = primeCheck(78);
console.log(ans);