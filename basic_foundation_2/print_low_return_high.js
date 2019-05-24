function a(arr){
  var min=arr[0], max=arr[0];
  for (var i=0;i<arr.length;i++){

    if(arr[i]>max){
      max = arr[i];
    }

    if(arr[i]<min){
      min = arr[i];
    }



  }

  console.log(min);
  return max;
}

b=[-1,3,5,-5];

a(b);

console.log(a(b));