import { connect, createStore } from 'undux'

// Create a store with an initial value.
export let store = createStore({
    sessionKey: null,
    sessionFetching: false,
})

export let withStore = connect(store);