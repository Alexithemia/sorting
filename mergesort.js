function mergeSort(array) {
  let temp = sort(array);
  count++;
  const tempArr = [].concat(temp);
  timeouts.push(setTimeout(function () {
    mkBars(tempArr);
  }, (count * speed)));
  count = 0;
  return array
}
function sort(array) {
  let bars = document.getElementsByClassName('bar');
  //basecase end when arrays become singles
  if (array.length === 1) {
    return array;
  }
  //finds middle index and creates two arrays from it
  const cut = Math.floor(array.length / 2);
  const left = array.slice(0, cut);
  const right = array.slice(cut);

  count++;
  const tempArr = array;
  const tempCut = cut;
  timeouts.push(setTimeout(function () {
    for (let i = 0; i < tempCut; i++) {
      console.log('hit');
      bars[i].style.backgroundColor = 'green';
    }
    for (let i = tempCut; i < tempArr.length; i++) {
      bars[i].style.backgroundColor = 'red';
    }
  }, (count * speed)));
  //runs the merge function to sort while also recuring itself to end with single value arrays
  return merge(sort(left), sort(right));
}

function merge(left, right) {
  let bars = document.getElementsByClassName('bar');
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

