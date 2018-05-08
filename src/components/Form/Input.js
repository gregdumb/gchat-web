import React from 'react';

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
			<input 
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
		<label style={style} >
			{field.label}
			{input}
		</label>
	)
}

export default Input;