import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import {Link} from 'react-router-dom'

class App extends Component {

  static propTypes = {
    state: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {state, actions} = this.props
    return (
      <div>
          {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
