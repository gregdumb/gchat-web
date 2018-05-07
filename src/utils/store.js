import { connect, createStore, withLogger } from 'undux'

// Create a store with an initial value.
export let store = withLogger(createStore({
    session_key: '',
	session_fetching: false,
	session_registerError: false,
	session_loginError: false,
	session_user: null,
}))

store.update = (pairs) => {
	for(let key in pairs) {
		let value = pairs[key];
		store.set(key)(value);
	}
}

export let withStore = connect(store);