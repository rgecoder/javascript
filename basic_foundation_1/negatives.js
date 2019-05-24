function a(arr){
  for (var i=0;i<arr.length;i++){
    if(arr[i]<0){
      arr[i]=0;
    }
  }
  return arr;
}

b = [1,5,10,-2];

console.log(a(b));