function mergeSort(array) {
  //basecase end when arrays become singles
  if (array.length === 1) {
    return array;
  }
  //finds middle index and creates two arrays from it
  const cut = Math.floor(array.length / 2);
  const left = array.slice(0, cut);
  const right = array.slice(cut);
  //runs the merge function to sort while also recuring itself to end with single value arrays
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let tempArr = [];
  let iL = 0;
  let iR = 0;
  //while loop to cycle through all values in the arrays
  while (iL < left.length && iR < right.length) {
    //finds smaller value between the two arrays at their current indexs and pushs them into a temporary array
    if (left[iL] < right[iR]) {
      tempArr.push(left[iL]);
      iL++;
    } else {
      tempArr.push(right[iR]);
      iR++;
    }
  }
  //returns the temporary array concatenated with whatever is left in the left and right array
  return tempArr.concat(left.slice(iL)).concat(right.slice(iR));
}
array = [7, 5, 8, 1, 9, 4, 0, 3, 6, 2];
console.log('Unsorted ' + array)
array = mergeSort(array);
console.log('Mergesorted ' + array);