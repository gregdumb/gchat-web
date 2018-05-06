import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
	
	constructor(props) {
		super(props);
		
		const fields = this.props.fields;
		const values = {};
		
		for(let f of fields) {
			let name = f.name;
			let value = f.defaultValue || '';
			values[name] = value;
		}
		
		this.state = {
			fields,
			values
		}
	}
	
	handleFieldChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		
		console.log({name, value});
		
		this.setState({
			values: {
				...this.state.values,
				[name]: value,
			}
		})
	}
	
	render() {
		return (
			<div>
				{this.props.fields.map(field => (
					<Input field={field} value={this.state.values[field.name]} onChange={this.handleFieldChange} />
				))}
			</div>
		);
	}
}

Form.propTypes = {
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired, // Maybe should be oneof?
			defaultValue: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number
			]),
		})
	)
}

Form.defaultProps = {
	fields: []
}

export default Form;