import React, {Component} from 'react';
import './Visualizer.css';
import Aux from '../../hoc/ReactAux';
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

const SPEED = 1;
const BASE_NUMBER_OF_ARRAY_BARS = 100;
const randomNumberGenerator = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));
const PRIMARY_COLOR = '#32a871';
const SECONDARY_COLOR = '#FF5733';

class Visualizer extends Component {
  
  state = {
    array: [],
    color: null,
    algo: 'Sorting Algorithm'
  };

  componentDidMount() {
    this.resetArrayHandler();
  }

  resetArrayHandler = () => {
    const array=[];
    let maxHeight = window.innerHeight;
    let maxWidth = window.innerWidth;

    let numOfArrays = BASE_NUMBER_OF_ARRAY_BARS;
    if(maxWidth >= 1008) {
      numOfArrays = BASE_NUMBER_OF_ARRAY_BARS;
    } else if(maxWidth >= 641) {
      numOfArrays = 0.75 * BASE_NUMBER_OF_ARRAY_BARS;
    } else {
      numOfArrays = 0.4 * BASE_NUMBER_OF_ARRAY_BARS;
    }

    console.log(maxHeight);
    
    for(let i = 0; i < numOfArrays; i++) {
      if(maxWidth > 1008) {
        array.push(randomNumberGenerator(0.01 * maxHeight, 0.7* maxHeight));
      } else {
        array.push(randomNumberGenerator(0.01 * maxHeight, 0.4* maxHeight));
      }
    }
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
        <Container>
          <Row>
            <Col sm={8}>
            <div className='ArrayContainer'>
              {this.state.array.map((value, idx)=> <ArrayBar key={idx} height={value} color={this.state.color}/>)}
            </div>
            </Col>
            <Col sm={4}><Description algo={this.state.algo}></Description></Col>
          </Row>
        </Container>
        <Slider></Slider>
      </Aux>
    );
  }
}






export default Visualizer;
