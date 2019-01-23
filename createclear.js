let array = [];

function clear() {
  let sorting = document.getElementById('sorting');
  sorting.innerHTML = '';
}

function mkArr(n) {
  array.length = 0;
  for (let i = 1; i <= n; i++) {
    array.push(i)
  }
}

function mkBars(array) {
  clear();

  for (let i = 0; i < array.length; i++) {
    let sorting = document.getElementById('sorting');
    let bar = document.createElement("div");
    bar.className = 'bar';
    bar.style.height = `${array[i] * (500 / num)}px`;
    sorting.appendChild(bar);
  }
}