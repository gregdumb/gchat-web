import { connect, createStore, withLogger } from 'undux'

// Create a store with an initial value.
export let store = withLogger(createStore({
    sessionKey: '',
    sessionFetching: false,
}))

export let withStore = connect(store);