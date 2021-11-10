let arr = [1, 2, 3, 2, 4];

// for
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 2) {
    continue;
  }
  console.log(arr[i]);
}
