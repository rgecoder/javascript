function a(arr){
  var sum=0, avg=0;
  for(var i=0;i<arr.length;i++){
    sum += arr[i];
  }
  avg = sum/arr.length;
  return avg;
}

b = [1,3,5,7,20];

console.log(a(b));