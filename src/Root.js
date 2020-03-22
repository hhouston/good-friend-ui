import React from 'react'
import Home from './components/Home'
import { PhotoGrid } from './components/PhotoGrid'
import { PhotoGridContainer } from './containers'
import TeamPageContainer from './containers/TeamPageContainer'
import PlayerPageContainer from './components/Player/PlayerPageContainer'
import CheckoutFormContainer from './components/Stripe/CheckoutFormContainer'
import Uploader from './components/Dropzone/Uploader'
// import { Provider } from 'react-redux'
// think about using apolo-client instead of apollo-boost
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'
import EnsureLoggedInContainer from './components/EnsureLoggedInContainer'

export const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Uploader} />
      <EnsureLoggedInContainer>
        <Route path='/test' component={PhotoGridContainer} />
        <Route path='/photos' component={PhotoGrid} />
        <Route path='/teams' component={TeamPageContainer} />
        <Route path='/player/:playerId' component={PlayerPageContainer} />
        <Route path='/checkout' component={CheckoutFormContainer} />
      </EnsureLoggedInContainer>
    </Switch>
  </Router>
)

const mapStateToProps = (state) => ({
  ...state
})

export default connect(
  mapStateToProps
)(Root)
