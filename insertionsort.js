function insertionSort(array) {
  //increasing number to start check at
  for (var i = 0; i < array.length; i++) {
    //stores value at current index to check throughoutrest of array.
    let value = array[i];
    //decends through array, if value at current index is larger than value variable, it moves it forward in the array
    for (var j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    //once value at current index is less that value variable for loop ends and inserts value into the array
    array[j + 1] = value;
  }

  return array
}
array = [7, 5, 8, 1, 9, 4, 0, 3, 6, 2];
console.log('Unsorted ' + array)
array = insertionSort(array);
console.log('Insertionsorted ' + array);