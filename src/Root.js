import React from 'react'
import UserNavBar from './components/UserNavBar'
import Home from './components/Home'
import Events from './components/Events'
import { Login, SignUp } from './components/Login'
import { Contact } from './components/Contact'
import { PricingCards, Start } from './components/SignUp/'
import { Account } from './components/MyAccount/'
import { AboutUs } from './components/AboutUs/'
import { Affiliate } from './components/Affiliate/'
import { Blog } from './components/Blog/'
// import { Provider } from 'react-redux'
// think about using apolo-client instead of apollo-boost
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'

export const Root = () => {
    const SubRoutes = () => {
        const expiresAt = localStorage.getItem('expiresAt')
        if (!expiresAt || expiresAt - Date.now() / 1000 <= 0) {
            localStorage.removeItem('userId')
            localStorage.removeItem('token')
            localStorage.removeItem('expiresAt')
            return <Redirect to="/login" />
        }

        return (
            <div>
                <UserNavBar home={false} />
                <Switch>
                    <Route path="/dashboard" component={Events} />
                    <Route path="/account" component={Account} />
                </Switch>
            </div>
        )
    }
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Start} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
                <Route path="/affiliate" component={Affiliate} />
                <Route component={SubRoutes} />
            </Switch>
        </Router>
    )
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps)(Root)
