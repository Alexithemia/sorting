function selectionSort(array) {
  //for loop increases index each time letting us leave smallest number set at previous index alone
  for (let i = 0; i < array.length; i++) {
    //sets smallest at current index
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      //if value at new index is smaller than value in our current smallest index, it sets the new index as the smallest
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    //if smallest is not the same as the index we started with, then we switch the original value with the smallest one we found during the loop.
    if (i !== smallest) {
      var temp = array[i];
      array[i] = array[smallest];
      array[smallest] = temp;
    }
  }
  return array;
}

array = [7, 5, 8, 1, 9, 4, 0, 3, 6, 2];
console.log('Unsorted ' + array)
array = selectionSort(array);
console.log('Selectionsorted ' + array);