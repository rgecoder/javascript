/* function a(arr){

  var temp=0;
  temp=arr[0];
  arr[0]=arr[arr.length];
  arr[arr.length] = temp;


  return arr;
}
 */
/* b =[1,10,5,-2];
/* b.sort(); */
/* b.sort(function(a,b){return a-b;});

console.log(b); */ 

function a(arr){
  var temp;
  temp=arr[0];
  arr[0]=arr[arr.length-1];
  arr[arr.length-1]=temp;
  return arr;
}

b = [1,5,10,-2];

console.log(a(b));

