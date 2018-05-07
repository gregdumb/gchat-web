import { connect, createStore, withLogger } from 'undux'

// Create a store with an initial value.
export let store = withLogger(createStore({
    session_key: '',
	session_fetching: false,
	session_user: null,
}))

export let withStore = connect(store);