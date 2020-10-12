import React from 'react'
import Home from './components/Home'
// import Start from './components/SignUp'
import Events from './components/Events'
import { Login, SignUp } from './components/Login'
import { PricingCards, Start } from './components/SignUp/'
// import { Provider } from 'react-redux'
// think about using apolo-client instead of apollo-boost
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'

export const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/viewAll" component={Events} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Start} />
            <Route path="/pricing" component={PricingCards} />
        </Switch>
    </Router>
)

const mapStateToProps = (state) => ({
    ...state,
})

export default connect(mapStateToProps)(Root)
