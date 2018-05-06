import React from 'react';

const Input = ({ field, value, valid, onChange, onBlur }) => {
	
	let input;
	let style = {color: valid ? 'unset' : 'red' }
	
	if(field.type === 'select') {
		
		input = (
			<select
				name={field.name}
				onChange={onChange}
				onBlur={onBlur}
			>
				{field.options.map(o => (
					<option value={o.value} key={o.value} selected={o.value === field.defaultValue} >{o.display}</option>
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