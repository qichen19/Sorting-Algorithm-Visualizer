const selectionSortAnimator = (array) => {
  const animations = [];
  selectionSort(array, animations);
  return animations;
}

const selectionSort = (array, animations) => {
  let startIdx = 0;
  while(startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for(let i = startIdx+1; i < array.length; i++) {
      animations.push([smallestIdx, i]);
      animations.push([smallestIdx, array[smallestIdx]]);
      animations.push([i, array[i]]);
      animations.push([smallestIdx, i]);
      if(array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    animations.push([startIdx, smallestIdx]);
    swap(startIdx, smallestIdx, array);
    animations.push([startIdx, array[startIdx]]);
    animations.push([smallestIdx, array[smallestIdx]]);
    animations.push([startIdx, smallestIdx]);
    startIdx++;
  }
}

const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

export default selectionSortAnimator;
