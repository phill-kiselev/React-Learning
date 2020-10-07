import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.css'
import Counter from './Counter'
import { add, sub, add_value, async_add } from './redux/actions/actions'

class App extends Component {
  
  render() {
    //console.log(this.props)
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onADD}>Добавить 1</button>
          <button onClick={this.props.onSUB}>Вычесть 1</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onADDValue(10)}>Добавить 10</button>
          <button onClick={() => this.props.onADDValue(-10)}>Вычесть 10</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>Асинхронно добавить 100</button>
        </div>

        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log(state)
  return {
    counter: state.counter1.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onADD: () => dispatch(add()),
    onSUB: () => dispatch(sub()),
    onADDValue: (val) => dispatch(add_value(val)),
    onAsyncAdd: (val) => dispatch(async_add(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
