import React, {Component} from 'react';

class Slider extends Component {




    render() {
        return (
        <div class="slidecontainer">
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
        </div>
        )
    }
} 


export default Slider


