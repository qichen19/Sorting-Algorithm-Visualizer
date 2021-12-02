import React, {Component} from 'react';
import './Visualizer.css';
import Aux from '../../hoc/ReactAux';
import ArrayBar from '../../components/ArrayBar/ArrayBar';
import Toolbar from '../../components/Toolbar/Toolbar';
import BubbleSortAnimator from '../../algorithms/BubbleSort/BubbleSort';
import QuickSortAnimator from '../../algorithms/QuickSort/QuickSort';
import HeapSortAnimator from '../../algorithms/HeapSort/HeapSort';
import MergeSortAnimator from '../../algorithms/MergeSort/MergeSort';
import InsertionSortAnimator from '../../algorithms/InsertionSort/InsertionSort';
import SelectionSortAnimator from '../../algorithms/SelectionSort/SelectionSort';

const SPEED = 1;
const BASE_NUMBER_OF_ARRAY_BARS = 150;
const randomNumberGenerator = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

class Visualizer extends Component {
  state = {
    array: [],
    color: null,
  };

  componentDidMount() {
    this.resetArrayHandler();
  }

  resetArrayHandler = () => {
    const array=[];
    let maxHeight = window.innerHeight;
    let maxWidth = window.innerWidth;
    console.log(maxWidth);
    for(let i = 0; i < BASE_NUMBER_OF_ARRAY_BARS * maxWidth / 1280; i++) {
      if(maxWidth > 1000) {
        array.push(randomNumberGenerator(0.01 * maxHeight, 0.8* maxHeight));
      } else {
        array.push(randomNumberGenerator(0.01 * maxHeight, 0.6* maxHeight));
      }
    }
    this.setState({array: array, color: PRIMARY_COLOR});
  }


  animationHandler = (animations) => {
    const arrayBars = document.getElementsByClassName('ArrayBar');
    for(let i = 0; i < animations.length; i++) {
      const index = i % 4;
      const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      switch(index) {
        case 0:
        case 3:
         const[barOneIdx, barTwoIdx] = animations[i];
         setTimeout(() => {
            arrayBars[barOneIdx].style.backgroundColor = color;
            arrayBars[barTwoIdx].style.backgroundColor = color;
          }, i*SPEED);
          break;
        case 2:
        case 1:
          const[barIdx, newHeight] = animations[i];
          setTimeout(() => {
            arrayBars[barIdx].style.height = `${newHeight}px`;
          }, i*SPEED);
          break;
        default: break;
      }
    }
  }

  mergeSortHandler = () => {
    const animations = MergeSortAnimator(this.state.array);
    for(let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('ArrayBar');
      const index = i % 3;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      switch(index) {
        case 0:
        case 2:
          const[barOneIdx, barTwoIdx] = animations[i];
          setTimeout(() => {
            arrayBars[barOneIdx].style.backgroundColor = color;
            arrayBars[barTwoIdx].style.backgroundColor = color;
          }, i*SPEED);
          break;
        case 1:
          const[barIdx, newHeight] = animations[i];
          setTimeout(() => {
            arrayBars[barIdx].style.height = `${newHeight}px`;
          }, i*SPEED);
          break;
        default: break;
      }
    }
  }

  quickSortHandler = () => {
    const animations = QuickSortAnimator(this.state.array);
    this.animationHandler(animations);
  }

  bubbleSortHandler = () => {
    const animations = BubbleSortAnimator(this.state.array);
    this.animationHandler(animations);
  }

  heapSortHandler = () => {
    const animations = HeapSortAnimator(this.state.array);
    this.animationHandler(animations);
  }

  selectionSortHandler = () => {
    const animations = SelectionSortAnimator(this.state.array);
    this.animationHandler(animations);
  }

  insertionSortHandler = () => {
    const animations = InsertionSortAnimator(this.state.array);
    this.animationHandler(animations);
  }


  render () {
    return (
      <Aux>
        <Toolbar
          generate={this.resetArrayHandler}
          bubbleSort={this.bubbleSortHandler}
          insertionSort={this.insertionSortHandler}
          selectionSort={this.selectionSortHandler}
          heapSort={this.heapSortHandler}
          quickSort={this.quickSortHandler}
          mergeSort={this.mergeSortHandler}/>
        <div className='ArrayContainer'>
          {this.state.array.map((value, idx)=> <ArrayBar key={idx} height={value} color={this.state.color}/>)}
        </div>
      </Aux>
    );
  }
}






export default Visualizer;
