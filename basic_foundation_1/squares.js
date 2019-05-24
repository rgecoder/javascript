function a(arr){
  for (var i=0;i<arr.length;i++){
    arr[i]=arr[i]*arr[i];
  }
  return arr;
}

b = [1,5,10,-2];

console.log(a(b));



