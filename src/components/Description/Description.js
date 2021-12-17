import React, {Component} from 'react';
import './Description.css';

const descriptionMap = new Map();
const complexityMap = new Map();

class Description extends Component {

    componentDidMount() {
        this.initializeMap();
      }

    initializeMap = () => {
        descriptionMap.set('Sorting Algorithm', 'This interactive Web App will help you explore the most prevalent 6 sorting algorithms, namely, Bubble Sort, Insertion Sort, Selection Sort, Quick Sort, Heap Sort and Merge Sort. In order to visualize the algorithm, first click New Array, then set the speed using the slider, finally choose the sorting algorithm.')
        descriptionMap.set('BubbleSort', 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.');
        descriptionMap.set('InsertionSort', 'Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.');
        descriptionMap.set('SelectionSort', 'The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.');
        descriptionMap.set('QuickSort', 'QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.');
        descriptionMap.set('HeapSort', 'Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.');
        descriptionMap.set('MergeSort', 'Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.');

        complexityMap.set('BubbleSort', 'The Time Complexity is O(N^2). The Space Complexity is O(1).');
        complexityMap.set('InsertionSort', 'The average case Time Complexity is O(N^2). The Time Complexity of the best case is O(N). The Space Complexity is O(1).');
        complexityMap.set('SelectionSort', 'The Time Complexity is O(N^2). The Space Complexity is O(1).');
        complexityMap.set('QuickSort', 'The average Time Complexity is O(N*log(N)). The Space Complexity is O(N).');
        complexityMap.set('HeapSort', 'The average Time Complexity is O(N*log(N)). The Space Complexity is O(N).');
        complexityMap.set('MergeSort', 'The average Time Complexity is O(N*log(N)). The Space Complexity is O(N).');
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