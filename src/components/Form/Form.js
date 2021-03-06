import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from 'material-ui/Button';

class Form extends React.Component {
	
	constructor(props) {
		super(props);
		
		const fields = this.props.fields;
		const values = {};
		const validationResults = {};
		
		for(let f of fields) {
			let name = f.name;
			let value = f.defaultValue || '';
			values[name] = value;
			validationResults[name] = true;
		}
		
		this.state = {
			fields,
			values,
			validationResults,
		}
	}
	
	validate = (field) => {
		
		if(!field) {
			console.error("Validation called on non-existant field");
			return false;
		}
		
		const value = this.state.values[field.name];
		
		let valid = true;
		if(field.required && !value) valid = false;
		if(field.validation && valid && value) valid = field.validation(value);
		
		console.log(field.name, 'is', valid);
		
		return valid === true;
	}
	
	validateOne = (name) => {
		const field = this.state.fields.find(f => f.name === name);
		if(!field) {
			console.error("Validation called on non-existant field", name);
			return;
		}
		
		const result = this.validate(field);
		
		this.setState({
			validationResults: {
				...this.state.validationResults,
				[name]: result,
			}
		})
	}
	
	validateAll = () => {
		let validationResults = {};
		let allPass = true;
		
		for(let field of this.state.fields) {
			let result = this.validate(field);
			validationResults[field.name] = result;
			allPass = allPass && result;
		}
		
		this.setState({
			validationResults,
		})
		
		return allPass;
	}
	
	handleFieldChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = (target.type === 'checkbox') ? target.checked : target.value;
		
		console.log({name, value});
		
		this.setState({
			values: {
				...this.state.values,
				[name]: value,
			}
		}, () => {
			if(this.state.validationResults[name] === false) {
				this.validateOne(name);
			}
		})
	}
	
	handleFieldBlur = (e) => {
		const target = e.target;
		const name = target.name;
		
		this.validateOne(name);
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		
		const values = {...this.state.values};
		const passed = this.validateAll();
		
		if(passed) this.props.onSubmit(this.state.values);
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit} style={this.props.style} >
				{this.props.fields.map(field => (
					<Input
						field={field}
						value={this.state.values[field.name]}
						valid={this.state.validationResults[field.name]}
						onChange={this.handleFieldChange}
						onBlur={this.handleFieldBlur}
						key={field.name}
					/>
				))}
				<Button onClick={this.handleSubmit} >Submit</Button>
			</form>
		);
	}
}

Form.propTypes = {
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			options: PropTypes.arrayOf(
				PropTypes.shape({
					value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
					display: PropTypes.string,
				})
			),
			defaultValue: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
				PropTypes.bool,
			]),
			required: PropTypes.bool,
			validation: PropTypes.func,
		})
	),
	onSubmit: PropTypes.func,
}

Form.defaultProps = {
	fields: [],
	style: {display: 'flex', flexDirection: 'column'},
}

export default Form;