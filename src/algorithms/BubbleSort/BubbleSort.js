
const bubbleSortAnimator = (array) => {
  const animations=[];
  bubbleSort(array, animations);
  return animations;
}


const bubbleSort = (array, animations) => {
  let isSorted = false;
  let counter = 0;
  while(!isSorted) {
    isSorted = true;
    for(let i = 0; i < array.length - 1 - counter; i++) {
      // push first time to indicate that these 2 items are being compared and their color need to be changed
      animations.push([i, i+1]);
      if(array[i] > array[i+1]) {
        swap(i, i+1, array);
        isSorted = false;
      }
      // push second time to update the new value of the first item being compared
      animations.push([i, array[i]]);
      // push third time to update the new value of the second item being compared
      animations.push([i+1, array[i+1]]);
      // push fourth time to change the color back
      animations.push([i, i+1]);
    }
    counter++
  }
}

const swap = (i,j,array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

export default bubbleSortAnimator;
