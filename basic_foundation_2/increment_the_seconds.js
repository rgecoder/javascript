function a(arr) {


  for (var i = 1; i < arr.length; i++) {
    if (i % 2 != 0) {
      arr[i] += 1;

    }

    console.log(arr[i]);
}
  return arr;
}

b = [1, 2, 3, 4, 5, 6, 7];

console.log(a(b));