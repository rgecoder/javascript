function a(arr){
  var sum=0;
  for(var i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  return sum;
}

b=[1,2,3];
console.log(a(b));