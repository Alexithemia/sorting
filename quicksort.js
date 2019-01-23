function quickSort(arr, left, right) {
  quickSortSub(arr, left, right);
  count++;
  const tempArr = [].concat(arr);
  timeouts.push(setTimeout(function () {
    mkBars(tempArr);
  }, (count * speed)));
  count = 0;
  return arr;
}
function quickSortSub(arr, left, right) {
  let bars = document.getElementsByClassName('bar');

  let len = arr.length,
    partitionIndex;

  if (left < right) {
    partitionIndex = partition(arr, left, right);

    //sort left and right
    quickSortSub(arr, left, partitionIndex - 1);
    quickSortSub(arr, partitionIndex + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  let bars = document.getElementsByClassName('bar');
  let pivotValue = arr[right],
    partitionIndex = left;

  for (let i = left; i < right; i++) {
    const tempI = [].concat(i);
    const tempLeft = [].concat(left);
    const tempRight = [].concat(right);
    count++;
    timeouts.push(setTimeout(function () {
      // for (let x = tempLeft[0]; x < tempI[0]; x++) {
      bars[tempI[0]].style.backgroundColor = 'red';
      // }
      bars[tempRight[0]].style.backgroundColor = 'blue';
    }, (count * speed)));
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex, left, right);

      count++;
      const tempArr = [].concat(arr);
      const tempI = [].concat(i);
      const tempJ = [].concat(partitionIndex)
      const tempLeft = [].concat(left);
      const tempRight = [].concat(right);
      timeouts.push(setTimeout(function () {
        mkBars(tempArr);
        for (let x = tempJ[0]; x <= tempI[0]; x++) {
          bars[x].style.backgroundColor = 'red';
        }
        for (let x = tempLeft[0]; x <= tempJ[0]; x++) {
          bars[x].style.backgroundColor = 'green';
        }
        if (tempRight) {
          bars[tempRight[0]].style.backgroundColor = 'blue';
        }
      }, (count * speed)));

      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);

  count++;
  const tempArr = [].concat(arr);
  const tempIndex = [].concat(partitionIndex);
  const tempRight = [].concat(right);
  timeouts.push(setTimeout(function () {
    mkBars(tempArr);
    bars[tempIndex[0]].style.backgroundColor = 'orange';
    bars[tempRight[0]].style.backgroundColor = 'orange';
  }, (count * speed)));
  return partitionIndex;
}

function swap(arr, i, j, left, right) {
  let bars = document.getElementsByClassName('bar');
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

}