
const mergeSortAnimator = (array) => {
  const animations = [];
  if(array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
  return animations;
}

const mergeSortHelper = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
  if(startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx)/2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx+1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

const doMerge = (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) => {
  let i = startIdx;
  let j = middleIdx+1;
  let k = startIdx;
  while(i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    if(auxiliaryArray[i] < auxiliaryArray[j]) {
      mainArray[k] = auxiliaryArray[i];
      animations.push([k, auxiliaryArray[i]]);
      animations.push([i, j]);
      i++;
    } else {
      mainArray[k] = auxiliaryArray[j];
      animations.push([k, auxiliaryArray[j]]);
      animations.push([i, j]);
      j++;
    }
    k++;
  }

  while(i <= middleIdx) {
    animations.push([i, i]);
    mainArray[k] = auxiliaryArray[i];
    animations.push([k, auxiliaryArray[i]]);
    animations.push([i, i]);
    i++;
    k++;
  }

  while(j <= endIdx) {
    animations.push([j, j]);
    mainArray[k] = auxiliaryArray[j];
    animations.push([k, auxiliaryArray[j]]);
    animations.push([j, j]);
    j++;
    k++;
  }
}


export default mergeSortAnimator;
