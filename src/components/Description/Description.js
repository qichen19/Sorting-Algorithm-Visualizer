import React, {Component} from 'react';
import './Description.css';

const descriptionMap = new Map();
const complexityMap = new Map();

class Description extends Component {

    componentDidMount() {
        this.initializeMap();
      }

    initializeMap = () => {
        descriptionMap.set('Sorting Algorithm', 'description')
        descriptionMap.set('BubbleSort', 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.');
        descriptionMap.set('InsertionSort', '2');
        descriptionMap.set('SelectionSort', '3');
        descriptionMap.set('QuickSort', '4');
        descriptionMap.set('HeapSort', '5');
        descriptionMap.set('MergeSort', '6');

        complexityMap.set('BubbleSort', 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.');
        complexityMap.set('InsertionSort', '2');
        complexityMap.set('SelectionSort', '3');
        complexityMap.set('QuickSort', '4');
        complexityMap.set('HeapSort', '5');
        complexityMap.set('MergeSort', '6');
    }

    getDescription = (algo) => {
        return descriptionMap.get(algo);
    }

    getComplexity = (algo) => {
        return complexityMap.get(algo);
    }

    render () {
        return (
            <div>
                <h1>{this.props.algo}</h1>
                <p>{this.getDescription(this.props.algo)}</p>
                <p>{this.getComplexity(this.props.algo)}</p>
            </div>
        )
    }
}

export default Description