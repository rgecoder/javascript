function a(arr){
  var b=[];
  for (var i=0;i<arr.length;i++){
    b.push(arr[i]*arr[i]);
  }

  return b;
}

c = [1,2,-5,10];

console.log(a(c));