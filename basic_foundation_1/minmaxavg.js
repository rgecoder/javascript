function a(arr){
  var max=arr[0], min=arr[0], avg=0,sum=0;
  var newArr=[];
  for (var i=0;i<arr.length;i++){
    sum += arr[i];
    if(max<arr[i]){
      max = arr[i];
    }

    if(min>arr[i]){
      min = arr[i];
    }
  }
  avg = sum/arr.length;
  newArr.push(max,min,avg);
  return newArr;
}

b = [1,5,10,-2];
console.log(a(b));