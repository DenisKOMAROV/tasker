import React, { Component } from 'react';


class App extends Component {
    state = {
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <ol>
                    <li>
                        do code
                        <button onClick={this.ClickButton()}>done!</button>
                    </li>
                </ol>

            </div>
        );
    }

}

//0 generate ol react tutorials
//1 map js function
//1.1 props react tutorials
//2 state = object [str]
//3 function index-> state[index+tick]


export default App;
