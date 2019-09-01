import * as React from 'react';
import moment from 'moment';
import uuidv1 from 'uuid/v1';
import update from 'immutability-helper';
import botImage from '../../assets/images/bot.svg';
import userImage from '../../assets/images/user.svg';
import { getAPIResponse } from './api/botApi';
import Bot from './Bot';

export default class BotContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			botSettings: undefined,
			userSettings: undefined,
			dialogData: {
				dialogFlow: [],
			},
			scrollTop: 0,
			isLoading: true,
		};

		this.loadingTimeout = null;
		this.scrollingTimeout = null;
		this.messagesEndRef = React.createRef();
	}

	componentDidMount() {
		const { settings } = this.props;

		this.initSettings(settings, () => {
			const { botSettings, dialogData } = this.state;

			const welcomeMessage = botSettings ? botSettings.welcomeMessage : '';

			this.updateDialogFlow(
				[this.getBotData({ message: { text: welcomeMessage } }, 'text')],
				dialogData,
				0,
				undefined,
				() => {
					this.setState({ isLoading: false });
				},
			);
		});
	}

	onSendClick = (text) => {
		const { dialogData, botSettings, userSettings } = this.state;

		this.updateDialogFlow(
			dialogData.dialogFlow.concat([this.getUserData({ message: { text } }, userSettings)]),
			dialogData,
			0,
			{ scrollDelay: 0 },
			() => {
				this.updateDialogFlow(
					this.state.dialogData.dialogFlow.concat([this.getBotData({ message: { text: '' } }, 'text', true, true)]),
					dialogData,
					500,
					{ scrollDelay: 0 },
					() => {
						this.getBotResponse(text, botSettings, (responses) => {
							const messages = this.getMessages(this.state.dialogData.dialogFlow, responses);

							const lastUserMessage = this.getLastUserMessage(messages);

							this.updateDialogFlow(
								messages,
								dialogData,
								1000,
								{ scrollDelay: 100, messageId: lastUserMessage && lastUserMessage.id },
							);
						});
					},
				);
			},
		);
	}

	render() {
		return (
			<Bot
				{...this.state}
				onSendClick={this.onSendClick}
				messagesEndRef={this.messagesEndRef}
			/>
		);
	}

	getMessages = (dialogFlow, responses) => {
		let dialog = dialogFlow;

		if (responses && responses.length) {
			let firstInSet = true;

			// eslint-disable-next-line no-unused-vars
			for (const response of responses) {
				const { data, type } = response || { data: { text: '' }, type: 'text' };

				if (data) {
					// eslint-disable-next-line no-unused-vars
					for (const d of data) {
						const botData = this.getBotData({ message: d }, type, firstInSet);

						dialog = update(dialog, {
							$splice: firstInSet ?
								[[dialog.length - 1, 1, botData]] : [[dialog.length, 0, botData]],
						});
					}

					firstInSet = false;
				}
			}
		}

		return dialog;
	}

	getBotData = (value, type, firstInSet, isReplying) => {
		return {
			type,
			value,
			firstInSet,
			isReplying,
			source: 'bot',
			image: botImage,
			orientation: 'left',
			timeStamp: moment().format('LT'),
			id: uuidv1(),
		};
	}

	getUserData = (value, userSettings) => {
		const { userImage } = userSettings || { userImage: '' };

		return {
			value,
			type: 'text',
			source: 'user',
			image: userImage,
			orientation: 'right',
			timeStamp: moment().format('LT'),
			firstInSet: false,
			id: uuidv1(),
		};
	}

	getBotResponse = (message, botSettings, onComplete) => {
		if (botSettings) {
			const { botUrl, botId, botProviderId, sessionId } = botSettings;

			getAPIResponse(botUrl, {
				message,
				botId,
				providerId: botProviderId,
				sessionId,
			}).then((botResponse) => {
				this.setState({ botResponse }, () => {
					if (onComplete && botResponse) {
						onComplete(botResponse);
					}
				});
			});
		}
	}

	updateDialogFlow = (messages, dialogData, delay, scrollToMessage, onComplete) => {
		this.loadingTimeout = global.setTimeout(() => {
			this.setState({
				dialogData: update(dialogData, { dialogFlow: { $set: messages } }),
			}, () => {
				clearTimeout(this.loadingTimeout);

				if (scrollToMessage) {
					const { messageId, scrollDelay } = scrollToMessage;
					this.scrollToMessage(messageId || messages[messages.length - 1].id, scrollDelay);
				}

				if (onComplete) {
					onComplete();
				}
			});
		}, delay);
	}

	initSettings = (settings, onComplete) => {
		this.setState({
			userSettings: {
				userId: uuidv1(),
				userImage: userImage,
			},
		}, () => {
			const { botUrl, botId, botProviderId, welcomeMessage } = settings;

			this.setState({
				botSettings: {
					botUrl,
					botId,
					botProviderId,
					welcomeMessage,
					sessionId: uuidv1(),
				},
			}, () => {
				if (onComplete) {
					onComplete();
				}
			});
		});
	}

	scrollToMessage = (message, delay) => {
		if (this.messagesEndRef) {
			this.scrollingTimeout = setTimeout(() => {
				const scrollToMessage = document.getElementById(message);

				if (scrollToMessage && scrollToMessage.firstChild) {
					this.messagesEndRef.current.scrollTo(0, (scrollToMessage.firstChild).offsetTop - 140);
				}

				clearTimeout(this.scrollingTimeout);
			}, delay || 500);
		}
	}

	getLastUserMessage = (messages) => {
		const message = messages.filter(m => m.source === 'user');
		return message.length ? message[message.length - 1] : undefined;
	}
}
