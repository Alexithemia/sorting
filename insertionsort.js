function insertionSort(array) {
  let bars = document.getElementsByClassName('bar');
  //increasing number to start check at
  for (var i = 0; i < array.length; i++) {
    //stores value at current index to check throughoutrest of array.
    let value = array[i];
    const tempI = [].concat(i);
    count++;
    timeouts.push(setTimeout(function () {
      bars[tempI[0]].style.backgroundColor = 'blue';
    }, (count * speed)));
    //decends through array, if value at current index is larger than value variable, it moves it forward in the array
    for (var j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];

      const tempJ = [].concat(j);
      count++
      timeouts.push(setTimeout(function () {
        bars[tempJ[0]].style.backgroundColor = 'red';
      }, (count * speed)));
    }
    //once value at current index is less that value variable for loop ends and inserts value into the array
    array[j + 1] = value;
    count++;
    const tempArr = [].concat(array);
    timeouts.push(setTimeout(function () {
      mkBars(tempArr);
    }, (count * speed)));
  }
  count++;
  const tempArr = [].concat(array);
  timeouts.push(setTimeout(function () {
    mkBars(tempArr);
  }, (count * speed)));
  count = 0;
  return array
}