import * as React from 'react';
import UserInput from './UserInput';

export default class UserInputContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInputValue: '',
		};
	}

	onTextFieldChanged = (e) => {
		this.setState({ userInputValue: e.currentTarget.value });
	}

	onSendClick = () => {
		this.sendUserInput(this.state.userInputValue);
	}

	onKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			this.sendUserInput(this.state.userInputValue);
		}
	}

	render() {
		return (
			<UserInput
				{...this.state}
				placeholder={this.props.placeholder}
				onTextFieldChanged={this.onTextFieldChanged}
				onSendClick={this.onSendClick}
				onKeyPress={this.onKeyPress}
			/>
		);
	}

	sendUserInput = (value) => {
		this.setState({ userInputValue: '' }, () => {
			const { onSendClick } = this.props;

			if (onSendClick && value) {
				onSendClick(value);
			}
		});
	}
}
