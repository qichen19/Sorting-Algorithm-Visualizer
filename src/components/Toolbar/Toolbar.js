import React, {Component} from 'react';
import './Toolbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

class ToolBar extends Component {
  state = {type : ''};

  changeTypeHandler = (newType) => {
    this.setState({type : newType})
  }

  render () {
    return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand>Sorting Visualizer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={this.props.generate}>Generate array</Nav.Link>
          <NavDropdown title="Sorting Algorithms" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => {this.props.bubbleSort(); this.changeTypeHandler('Bubble Sort')}}>Bubble Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.insertionSort(); this.changeTypeHandler('Insertion Sort')}}>Insertion Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.selectionSort(); this.changeTypeHandler('Selection Sort')}}>Selection Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.heapSort(); this.changeTypeHandler('Heap Sort')}}>Heap Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.quickSort(); this.changeTypeHandler('Quick Sort')}}>Quick Sort</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {this.props.mergeSort(); this.changeTypeHandler('Merge Sort')}}>Merge Sort</NavDropdown.Item>
          </NavDropdown>
          <Button variant="info">{this.state.type}</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
  }
}

export default ToolBar;
