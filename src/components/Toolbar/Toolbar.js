import React, {Component} from 'react';
import './Toolbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class ToolBar extends Component {
  state = {type : ''};

  changeTypeHandler = (newType) => {
    this.setState({type : newType})
  }

  render () {
    return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Navbar.Brand>Sorting Visualizer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={this.props.generate}>New Array</Nav.Link>
          <NavDropdown title="Sorting Algorithms" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => {this.props.bubbleSort()}}>Bubble Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.insertionSort(); this.changeTypeHandler('Insertion Sort')}}>Insertion Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.selectionSort(); this.changeTypeHandler('Selection Sort')}}>Selection Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.heapSort(); this.changeTypeHandler('Heap Sort')}}>Heap Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.quickSort(); this.changeTypeHandler('Quick Sort')}}>Quick Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.mergeSort(); this.changeTypeHandler('Merge Sort')}}>Merge Sort</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
  }
}

export default ToolBar;
