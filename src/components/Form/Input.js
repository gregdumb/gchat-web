import React from 'react';

const Input = ({ field, value, onChange }) => {
	
	if(field.type === 'select') {
		
	}
	else {
		return (
			<input 
				name={field.name}
				value={value}
				onChange={onChange}
			/>
		)
	}
	
}

export default Input;