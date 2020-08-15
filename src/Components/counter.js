import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Your score is: {this.props.ctr} </h1>
                <button onClick={this.props.onIncCounter} >Add</button>
                <button onClick={this.props.onReduceCounter}>Reduce</button>
                <button onClick={this.props.onAddFive}>Add 5</button>
                <button onClick={this.props.onReduceFive}>Remove 5</button>
                <button onClick={this.props.onReset}>Reset</button>
                <div>
                    <button onClick={this.props.onStoreResult}>Store result</button>
                </div>
                <ul>
                    {this.props.storedResult.map((item) => (
                        <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResult: state.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({ type: 'INCREMENT' }),
        onReduceCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddFive: () => dispatch({ type: 'ADD', value: 5 }),
        onReduceFive: () => dispatch({ type: 'REDUCE', value: 5 }),
        onReset: () => dispatch({ type: 'RESET' }),
        onStoreResult: (result) => dispatch({ type: 'STORE_RESULT', result: result }),
        onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', id: id })
    }
}



/* const Counter = (props) => {
    return (
        <div>
            <button onClick={props.add}>Add</button>
            <div>{props.number}</div>
            <button onClick={props.reduce}>Reduce</button>
            <button onClick={props.reset}>Reset</button>

        </div>
    );
} */

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
