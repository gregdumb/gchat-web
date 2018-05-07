export const registerForm = [{
	name: 'firstName',
	label: 'First name',
	type: 'text',
	required: true,
},{
	name: 'lastName',
	label: 'Last name',
	type: 'text',
	required: false,
	validation: s => s.length > 3,
},{
	name: 'email',
	label: 'Email',
	type: 'email',
	required: true,
}, {
	name: 'password',
	label: 'Password',
	type: 'password',
	required: true,
	validation: s => s.length >= 4,
} ]

export const loginForm = [{
	name: 'email',
	label: 'Email',
	type: 'email',
	required: true,
}, {
	name: 'password',
	label: 'Password',
	type: 'password',
	required: true,
}]