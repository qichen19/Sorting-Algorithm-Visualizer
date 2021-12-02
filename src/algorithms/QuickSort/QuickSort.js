
const quickSortAnimator = (array) => {
  const animations=[];
  quickSortHelper(array, 0, array.length-1, animations);
  return animations;
}


const quickSortHelper = (array, startIdx, endIdx, animations) => {
  if(startIdx >= endIdx) return;
  const pivotIdx = startIdx;
  let leftIdx = startIdx+1;
  let rightIdx = endIdx;
  while(rightIdx >= leftIdx) {
    // push first time to indicate that these 2 items are being compared and their color need to be changed
    animations.push([leftIdx, rightIdx]);
    if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }
    // push second time to update the new value of the first item being compared
    animations.push([leftIdx, array[leftIdx]]);
    // push third time to update the new value of the second item being compared
    animations.push([rightIdx, array[rightIdx]]);
    // push fourth time to change the color back
    animations.push([leftIdx, rightIdx]);
    if(array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if(array[rightIdx] >= array[pivotIdx]) rightIdx--;
  }
  // push first time to indicate that these 2 items are being compared and their color need to be changed
  animations.push([rightIdx, pivotIdx]);
  swap(rightIdx, pivotIdx, array);
  // push second time to update the new value of the first item being compared
  animations.push([rightIdx, array[rightIdx]]);
  // push third time to update the new value of the second item being compared
  animations.push([pivotIdx, array[pivotIdx]]);
  // push fourth time to change the color back
  animations.push([rightIdx, pivotIdx]);
  const leftSubArrayIsSmaller = rightIdx - 1 - startIdx < endIdx - rightIdx - 1;
  if(leftSubArrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx-1, animations);
    quickSortHelper(array, rightIdx+1, endIdx, animations);
  } else {
    quickSortHelper(array, rightIdx+1, endIdx, animations);
    quickSortHelper(array, startIdx, rightIdx-1, animations);
  }
}

const swap = (i,j,array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

export default quickSortAnimator;
