import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'

import './counter.css'

class Counter extends Component {
    render() {
        return (
            <div className="container">
                <h1>Your score is: {this.props.ctr} </h1>
                <button onClick={this.props.onIncCounter} >Add</button>
                <button onClick={this.props.onReduceCounter}>Reduce</button>
                <button onClick={this.props.onAddFive}>Add 5</button>
                <button onClick={this.props.onReduceFive}>Remove 5</button>
                <button onClick={this.props.onReset}>Reset</button>
                <div>
                    <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
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
        ctr: state.ctr.counter,
        storedResult: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onReduceCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddFive: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        onReduceFive: () => dispatch({ type: actionTypes.REDUCE, value: 5 }),
        onReset: () => dispatch({ type: actionTypes.RESET }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultItem: id })
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
