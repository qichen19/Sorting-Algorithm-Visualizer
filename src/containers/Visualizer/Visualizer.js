import React, {Component} from 'react';
import './Visualizer.css';
import ArrayBar from '../../components/ArrayBar/ArrayBar';
import Toolbar from '../../components/Toolbar/Toolbar';
import Description from '../../components/Description/Description';
import Slider from '../../components/Slider/Slider';
import BubbleSortAnimator from '../../algorithms/BubbleSort/BubbleSort';
import QuickSortAnimator from '../../algorithms/QuickSort/QuickSort';
import HeapSortAnimator from '../../algorithms/HeapSort/HeapSort';
import MergeSortAnimator from '../../algorithms/MergeSort/MergeSort';
import InsertionSortAnimator from '../../algorithms/InsertionSort/InsertionSort';
import SelectionSortAnimator from '../../algorithms/SelectionSort/SelectionSort';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var SPEED = 1;
const BASE_NUMBER_OF_ARRAY_BARS = 100;
const randomNumberGenerator = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));
const PRIMARY_COLOR = '#32a871';
const SECONDARY_COLOR = '#FF5733';
var timeOut1;
var timeOut2;
var timeOut3;
var timeOut4;


class Visualizer extends Component {
  
  state = {
    array: [],
    color: null,
    algo: 'Sorting Algorithm',
    speedState: true
  };

  componentDidMount() {
    this.resetArrayHandler();
  }

  resetArrayHandler = () => {
    const array=[];
    let maxHeight = window.innerHeight;
    let maxWidth = window.innerWidth;

    console.log(maxHeight);
    
    for(let i = 0; i < BASE_NUMBER_OF_ARRAY_BARS; i++) {
      if(maxWidth > 1008) {
        array.push(randomNumberGenerator(0.01 * maxHeight, 0.7* maxHeight));
      } else {
        array.push(randomNumberGenerator(0.01 * maxHeight, 0.4* maxHeight));
      }
    }

    // for(let i = 0; i < BASE_NUMBER_OF_ARRAY_BARS; i++) {
    //   array.push(randomNumberGenerator(0.01, 0.7))
    // }
    this.setState({array: array, color: PRIMARY_COLOR, algo: 'Sorting Algorithm'});
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
         timeOut1 = setTimeout(() => {
            arrayBars[barOneIdx].style.backgroundColor = color;
            arrayBars[barTwoIdx].style.backgroundColor = color;
          }, i*SPEED);
          break;
        case 2:
        case 1:
          const[barIdx, newHeight] = animations[i];
          timeOut2 = setTimeout(() => {
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
          timeOut3 = setTimeout(() => {
            arrayBars[barOneIdx].style.backgroundColor = color;
            arrayBars[barTwoIdx].style.backgroundColor = color;
          }, i*SPEED);
          break;
        case 1:
          const[barIdx, newHeight] = animations[i];
          timeOut4 = setTimeout(() => {
            arrayBars[barIdx].style.height = `${newHeight}px`;
          }, i*SPEED);
          break;
        default: break;
      }
    }
    this.setState({algo: 'MergeSort'})
  }

  quickSortHandler = () => {
    const animations = QuickSortAnimator(this.state.array);
    this.animationHandler(animations);
    this.setState({algo: 'QuickSort'})
  }

  bubbleSortHandler = () => {
    const animations = BubbleSortAnimator(this.state.array);
    this.animationHandler(animations);
    this.setState({algo: 'BubbleSort'})
  }

  heapSortHandler = () => {
    const animations = HeapSortAnimator(this.state.array);
    this.animationHandler(animations);
    this.setState({algo: 'HeapSort'})
  }

  selectionSortHandler = () => {
    const animations = SelectionSortAnimator(this.state.array);
    this.animationHandler(animations);
    this.setState({algo: 'SelectionSort'})
  }

  insertionSortHandler = () => {
    const animations = InsertionSortAnimator(this.state.array);
    this.animationHandler(animations);
    this.setState({algo: 'InsertionSort'})
  }

  changeSpeed = (speedRatio) => {
    SPEED = 50 / speedRatio * SPEED;
  }

  stopTimeout = () => {
    if(this.state.algo === 'Sorting Algorithm') {

    }
    else if(this.state.algo === "MergeSort") {
      clearTimeout(timeOut3);
      clearTimeout(timeOut4);
    } else {
      console.log(timeOut1);
      clearTimeout(timeOut1);
      clearTimeout(timeOut2);
      console.log(timeOut1);
    }
  }


  render () {
    return (
      <div>
        <Toolbar
          generate={this.resetArrayHandler}
          bubbleSort={this.bubbleSortHandler}
          insertionSort={this.insertionSortHandler}
          selectionSort={this.selectionSortHandler}
          heapSort={this.heapSortHandler}
          quickSort={this.quickSortHandler}
          mergeSort={this.mergeSortHandler}/>
        <Container>
          <h6>Speed</h6>
          <Slider mutateSpeed={this.changeSpeed}></Slider>
          <Row>
            <Col sm={8}>
            <div className='ArrayContainer'>
              {this.state.array.map((value, idx)=> <ArrayBar key={idx} height={value} color={this.state.color}/>)}
            </div>
            </Col>
            <Col sm={4}><Description algo={this.state.algo}></Description></Col>
          </Row>
        </Container>
        <footer className="bg-dark fixed-bottom"><p>© Copyright 2021 Qi Chen</p></footer>
       </div>
    );
  }
}






export default Visualizer;
