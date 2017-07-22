import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { browserHistory } from 'react-router'

class Home extends Component {
  
  static propTypes = {
    state: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {actions} = this.props
  }

  render() {
    const {state} = this.props
    return (
      <div>
        <p>Home</p>
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
)(Home)
