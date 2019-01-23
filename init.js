let count = 0;
let speed = 500;
let timeouts = [];
let num = 20;

mkArr(num);
mkBars(array);

let sortBtns = document.getElementById('sortingButtons')
let quick = document.createElement('button');
quick.className = 'btn';
quick.innerHTML = 'QuickSort';
quick.addEventListener('click', function () {
  quickSort(array, 0, array.length - 1);
})
sortBtns.appendChild(quick);

let mergeB = document.createElement('button');
mergeB.className = 'btn';
mergeB.innerHTML = 'MergeSort';
mergeB.addEventListener('click', function () {
  mergeSort(array);
})
sortBtns.appendChild(mergeB);

let select = document.createElement('button');
select.className = 'btn';
select.innerHTML = 'SelectionSort';
select.addEventListener('click', function () {
  selectionSort(array);
})
sortBtns.appendChild(select);

let insert = document.createElement('button');
insert.className = 'btn';
insert.innerHTML = 'InsertionSort';
insert.addEventListener('click', function () {
  insertionSort(array);
})
sortBtns.appendChild(insert);

let shuf = document.createElement('button');
shuf.className = 'btn';
shuf.innerHTML = 'Shuffle';
shuf.addEventListener('click', function () {
  stop();
  shuffle(array);
})
sortBtns.appendChild(shuf);
document.getElementById('slow').addEventListener('click', function () {
  slow()
});
document.getElementById('medium').addEventListener('click', function () {
  medium()
});
document.getElementById('fast').addEventListener('click', function () {
  fast()
});
document.getElementById('stop').addEventListener('click', function () {
  stop()
});

function slow() {
  speed = 500
}

function medium() {
  speed = 300
}

function fast() {
  speed = 100
}

document.getElementById('10').addEventListener('click', function () {
  ten()
});
document.getElementById('20').addEventListener('click', function () {
  twenty()
});
document.getElementById('30').addEventListener('click', function () {
  thirty()
});
document.getElementById('40').addEventListener('click', function () {
  forty()
});
document.getElementById('50').addEventListener('click', function () {
  fifty()
});

function ten() {
  stop()
  num = 10;
  mkArr(num);
  mkBars(array);
}

function twenty() {
  stop()
  num = 20;
  mkArr(num);
  mkBars(array);
}

function thirty() {
  stop()
  num = 30;
  mkArr(num);
  mkBars(array);
}

function forty() {
  stop()
  num = 40;
  mkArr(num);
  mkBars(array);
}

function fifty() {
  stop()
  num = 50;
  mkArr(num);
  mkBars(array);
}

function stop() {
  for (let i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
}