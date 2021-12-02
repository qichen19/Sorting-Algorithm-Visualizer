const insertionSortAnimator = (array) => {
  const animations = [];
  insertionSort(array, animations);
  return animations;
}

const insertionSort = (array, animations) => {
  for(let i = 1; i < array.length; i++) {
    let j = i;
    while(j > 0 && array[j] < array[j-1]) {
      // push first time to indicate that these 2 items are being compared and their color need to be changed
      animations.push([j, j-1]);
      swap(j, j-1, array);
      // push second time to update the new value of the first item being compared
      animations.push([j, array[j]]);
      // push third time to update the new value of the second item being compared
      animations.push([j-1, array[j-1]]);
      // push fourth time to change the color back
      animations.push([j, j-1]);
      j--;
    }
  }
}

const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

export default insertionSortAnimator;
