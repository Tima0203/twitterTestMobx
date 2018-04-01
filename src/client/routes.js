import React from 'react'
import { Route } from 'react-router'
import App from './containers/App.jsx'

/**
 * Asynchronously load a file
 * @param main {String} - Main component
 * @returns {Function}
 */
function requireAsync(main) {
    return function(location, next) {
        next(null, require('./containers/pages/' + main + '.jsx'))
    }
}

/**
 * Routes are defined here. They are loaded asynchronously.
 * Paths are relative to the "components" directory.
 * @param {Object}
 * @returns {Object}
 */
export default function createRoutes() {
    return (<Route component={App}>
                <Route path="/"             getComponent={requireAsync('Login')}/>
                <Route path="browse"        getComponent={requireAsync('Browse')}/>
                <Route path="about"         getComponent={requireAsync('About')}/>
                <Route path="tweets"        getComponent={requireAsync('Tweets')}/>
                <Route path="new-tweet"     getComponent={requireAsync('NewTweet')}/>
                <Route path="registration"  getComponent={requireAsync('Registration')}/>
                <Route path="login"         getComponent={requireAsync('Login')}/>
                <Route path="*"             getComponent={requireAsync('NotFound')}/>           
            </Route>)
}
