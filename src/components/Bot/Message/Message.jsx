import * as React from 'react';
import config from './config';

const Message = (props) => {
	const { type } = props.message;
	const MessageComponent = type ? (config)[type].default : null;

	return MessageComponent ? <MessageComponent {...props} /> : null;
};

export default Message;
