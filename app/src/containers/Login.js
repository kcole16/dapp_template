import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class Login extends Component {

  static propTypes = {
    state: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      email: null,
      password: null
    }
  }

  handleChange(e) {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleSubmit() {
    const {actions} = this.props
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    actions.fetchLogin(user)
  }

  render() {
    const {state} = this.props
    return (
      <div className="login-container" style={styles.loginContainer}>
        <div className="login" style={styles.login}>
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <input
                className="form-control"
                onKeyPress={e => e.charCode === 13 && this.handleSubmit()}
                type="email"
                name="email"
                onChange={this.handleChange}/>
            </div>
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input
                className="form-control"
                onKeyPress={e => e.charCode === 13 && this.handleSubmit()}
                type="password"
                name="password"
                onChange={this.handleChange}/>
            </div>
            {state.user.incorrectLogin ? <label className="error" style={styles.error}>Incorrect Email or Password</label> : null}
          <div className="request-button" style={{marginTop: 20}}>
            <button 
              type="button" 
              className="btn btn-primary btn-block" 
              style={{cursor: 'pointer'}}
              onClick={this.handleSubmit}>Login</button>
          </div>
        </div>
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
)(Login)

const styles = {
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  login: {
    width: 400,
    marginTop: 70
  },
  error: {
    color: 'red'
  }
}
