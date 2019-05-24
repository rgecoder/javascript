function a(arr){

  for(var i=0;i<arr.length;i++){
    if (arr[i]%2 == 0 && arr[i+1]%2==0 && arr[i+2]%2==0){
      console.log("Even more so!");
      i+=3;
    }
  }

  for (var i=0;i<arr.length;i++){  
    
    if (arr[i]%2 != 0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
      console.log("That's odd");
      i+=3;
    }
  

  return arr;
}
}


b=[2,2,2,3,3,3];
c=[2,1,2,3,3,3];
d=[3,1,2,2,2,5];

console.log(a(d));