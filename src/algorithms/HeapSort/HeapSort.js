const heapSortAnimator = (array) => {
  const animations = [];
  buildMaxHeap(array, animations);
  for(let endIdx = array.length-1; endIdx > 0; endIdx--) {
    swap(0, endIdx, array);
    // push first time to indicate that these 2 items are being compared and their color need to be changed
    animations.push([0, endIdx]);
    // push second time to update the new value of the first item being compared
    animations.push([0, array[0]]);
    // push third time to update the new value of the second item being compared
    animations.push([endIdx, array[endIdx]]);
    // push fourth time to change the color back
    animations.push([0, endIdx]);
    siftDown(0, endIdx-1, array, animations);
  }
  return animations;
}

const buildMaxHeap = (array, animations) => {
  const firstParentIdx = Math.floor((array.length-2)/2);
  for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, array.length-1, array, animations);
  }
}

const siftDown = (currentIdx, endIdx, array, animations) => {
  let childOneIdx = 2 * currentIdx + 1;
  while(childOneIdx <= endIdx) {
    const childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
    let idxToSwap;
    if(childTwoIdx !== -1 && array[childTwoIdx] > array[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }
    // push first time to indicate that these 2 items are being compared and their color need to be changed
    animations.push([idxToSwap, currentIdx]);
    if(array[currentIdx] < array[idxToSwap]) {
      swap(idxToSwap, currentIdx, array);
      // push second time to update the new value of the first item being compared
      animations.push([idxToSwap, array[idxToSwap]]);
      // push third time to update the new value of the second item being compared
      animations.push([currentIdx, array[currentIdx]]);
      // push fourth time to change the color back
      animations.push([idxToSwap, currentIdx]);
      currentIdx = idxToSwap;
      childOneIdx = 2 * currentIdx + 1;
    } else {
      // push second time to update the new value of the first item being compared
      animations.push([idxToSwap, array[idxToSwap]]);
      // push third time to update the new value of the second item being compared
      animations.push([currentIdx, array[currentIdx]]);
      // push fourth time to change the color back
      animations.push([idxToSwap, currentIdx]);
      return ;
    }
  }
}

const swap = (i,j,array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

export default heapSortAnimator;
