import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from "./Theme/ThemeContext";
import botImage from '../../assets/images/bot.svg';
import Message from './Message/Message';
import Switch from './Common/Switch/Switch';
import UserInputContainer from './UserInput/UserInputContainer';

import S from './Bot.module.scss';

const Bot = (props) => {
	const { dialogData, onSendClick, messagesEndRef } = props;
	const { dialogFlow } = dialogData;

	const themeState = useTheme();
	const isDark = themeState.dark;

	return (
		<Container className={S.container}>
			<Row className={S.row}>
				<Col className={S.column}>
					<Row className={S.dialog_header}>
						<Col className={S.bot_info_container} xs={12} md={6}>
							<div className={S.bot_image}>
								<img className={S.image} src={botImage} alt="" />
							</div>
							<div className={S.bot_info}>
								<div className={S.bot_name}>
									Filament Bot
								</div>
								<div className={S.bot_status}>
									online
								</div>
							</div>
						</Col>
						<Col className={S.bot_settings_container} xs={12} md={6}>
							<div className={S.bot_settings}>
								<Switch 
									label={isDark ? 'Dark mode' : 'Light mode'} 
									checked={isDark}
									onToggle={() => themeState.toggleTheme()} 
								/>
							</div>
						</Col>
					</Row>
					<div className={S.dialog_container}>
						<div className={`${S.dialog_content} ${isDark ? S.dark : S.light}`} ref={messagesEnd => messagesEndRef(messagesEnd)}>
							{
								dialogFlow && dialogFlow.map((message, i) => {
									return (
										<div id={message.id} key={i}>
											<Message message={message} />
										</div>
									);
								})
							}
						</div>
						<div className={`${S.dialog_footer} ${isDark ? S.dark : S.light}`}>
							<UserInputContainer placeholder="Ask a question..." onSendClick={onSendClick} />
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Bot;
