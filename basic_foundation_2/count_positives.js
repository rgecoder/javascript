function a(arr){
  var count = 0;
  for (var i=0;i<arr.length;i++){
    if(arr[i]>0){
      count++;
    }
  }
  arr[arr.length-1]=count;
  return arr;
}

b=[-1,1,1,1];

console.log(a(b));