import { observable, toJS } from 'mobx'
import mergeObservables from '../server/helpers/mergeObservables'

// Default state structure
let defaultState =  observable({
    app: {
        title: 'Mobx Isomorphic Starter',
        description : 'Here goes description',
        host: ''
    },
    browse: {
        data : ''
    },
    logedin: false,
    tweets: [
        { title: 'tweet 1', text: 'asd'},
        { title: 'tweet 2', text: 'asdf'}
    ]
})


// Export function that creates our server state
export const createServerState = () => toJS(defaultState)

// Export function that creates our client state
export const createClientState = () => mergeObservables(defaultState, window.__STATE)
