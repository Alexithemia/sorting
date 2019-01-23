function selectionSort(array) {
  let bars = document.getElementsByClassName('bar');
  //for loop increases index each time letting us leave smallest number set at previous index alone
  for (let i = 0; i < array.length; i++) {
    count++;
    timeouts.push(setTimeout(function () {
      bars[i].style.backgroundColor = 'blue';
    }, (count * speed)));
    //sets smallest at current index
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      count++;
      timeouts.push(setTimeout(function () {
        bars[j].style.backgroundColor = 'green';
      }, (count * speed)));
      //if value at new index is smaller than value in our current smallest index, it sets the new index as the smallest
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    count++;
    timeouts.push(setTimeout(function () {
      bars[smallest].style.backgroundColor = 'red';
    }, (count * speed)));
    //if smallest is not the same as the index we started with, then we switch the original value with the smallest one we found during the loop.
    if (i !== smallest) {
      var temp = array[i];
      array[i] = array[smallest];
      array[smallest] = temp;
      const tempArr = [].concat(array);
      count++;
      timeouts.push(setTimeout(function () {
        mkBars(tempArr);
      }, (count * speed)));
    }
  }
  count++;
  timeouts.push(setTimeout(function () {
    mkBars(array);
  }, (count * speed)));
  count = 0;
  return array;
}