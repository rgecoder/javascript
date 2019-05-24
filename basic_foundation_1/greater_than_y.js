function a(arr,y){
  var count=0;
  for(var i=0;i<arr.length;i++){
   if(arr[i]>y){
     count++;
   } 
  }
  return count;
}

b = [1,3,5,7];

c = 3;

console.log(a(b,c));