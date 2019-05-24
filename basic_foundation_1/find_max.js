function a(arr){
  var max=arr[0];
  for(var i=0;i<arr.length;i++){
    if (max<arr[i]){
      max = arr[i];
    }
  }

  return max;

}

b = [-3,3,5,7];

console.log(a(b));