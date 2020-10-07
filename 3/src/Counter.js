import React from 'react'
import { connect } from 'react-redux'
import { add2 } from './redux/actions/actions'

class Counter extends React.Component {

    render() {
        //console.log(this.props)
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={() => this.props.onADD(1)}>Add</button>
                    <button onClick={() => this.props.onADD(-1)}>Sub</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    //console.log(state)
    return {
        counter: state.counter2.counter2
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onADD: (val) => dispatch(add2(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)