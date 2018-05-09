import React from 'react';
import TextField from 'material-ui/TextField';

const Input = ({ field, value, valid, onChange, onBlur }) => {
	
	let input;
	let style = {
		color: valid ? 'unset' : 'red',
		marginBottom: '1em',
	}

	let inputStyle = {
		float: 'right',
		marginLeft: '1em'
	}
	
	if(field.type === 'select') {
		
		input = (
			<select
				name={field.name}
				onChange={onChange}
				onBlur={onBlur}
				defaultValue={field.defaultValue}
				style={inputStyle}
			>
				{field.options.map(o => (
					<option value={o.value} key={o.value} >{o.display}</option>
				))}
			</select>
		)
	}
	else {
		input = (
			<TextField 
				label={field.label}
				error={!valid}

				name={field.name}
				type={field.type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				style={inputStyle}
			/>
		)
	}
	
	return(
		input
	)
}

export default Input;