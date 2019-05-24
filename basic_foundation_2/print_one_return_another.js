function a(arr){
  console.log(arr[arr.length-2]);
  for(var i=0;i<arr.length;i++){

    if(arr[i]%2 != 0){
      return arr[i];
    }


  }
}


b=[2,5,6,10,3];

console.log(a(b));