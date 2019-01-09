function quickSort(array) {
  //basecase ends once the array is one value or less
  if (array.length <= 1) {
    return array;
  }
  //assigns pivot to last value in array as well as removing that value
  let pivot = array.pop();
  let left = [], right = [];
  //compares each value in the array to the pivot and places it into appropriate array
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    };
  }
  //recurs itself as it returns while concatenating the results. 
  return quickSort(left).concat(pivot, quickSort(right));
}
array = [7, 5, 8, 1, 9, 4, 0, 3, 6, 2];
console.log('Unsorted ' + array)
array = quickSort(array);
console.log('Quicksorted ' + array);