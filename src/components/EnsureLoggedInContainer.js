import React from 'react'
import { connect } from 'react-redux'
import jsonwebtoken from 'jsonwebtoken'
import { withRouter } from 'react-router'

class EnsureLoggedInContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: 'pending'
    }
  }
  componentDidMount () {
    const { isLoggedIn } = this.state
    const token = localStorage.getItem('token') || ''
    if (token) {
      const decoded = jsonwebtoken.decode(token, { complete: true })
      const tokenExp = decoded.payload.exp
      this.setState({ isLoggedIn: new Date().getTime() / 1000 < tokenExp })
    } else {
      this.setState({ isLoggedIn: false })
      this.props.history.push('/')
    }
    if (!isLoggedIn) {
      this.props.history.push('/')
    }
  }

  render () {
    const { isLoggedIn } = this.state
    if (isLoggedIn) {
      return this.props.children
    } else {
      return <p>not logged in</p>
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps (state) {

}

export default withRouter(EnsureLoggedInContainer)
