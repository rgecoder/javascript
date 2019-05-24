function a(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]<0){
      arr[i]='Dojo';
    }
  }
  return arr;
}

b =[-1,-3,2];

console.log(a(b));