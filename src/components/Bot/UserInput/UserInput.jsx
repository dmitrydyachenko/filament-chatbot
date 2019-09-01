import * as React from 'react';
import { useTheme } from '../Theme/ThemeContext';
import Octicon, { Pencil } from '@primer/octicons-react';
import Form from 'react-bootstrap/Form';

import S from './UserInput.module.scss';

const UserInput = (props) => {
	const { userInputValue, placeholder, enableMicrophone, onTextFieldChanged, onSendClick, onKeyPress } = props;

	const themeState = useTheme();
	const isDark = themeState.dark;

	return (
		<div className={`${S.container} ${isDark ? S.dark : S.light}`} onKeyPress={onKeyPress}>
			<div className={S.content}>
				<div className={S.pencil}>
					<Octicon icon={Pencil} />
				</div>
				<div className={S.input}>
					<Form.Control
						size="lg"
						type="text"
						value={userInputValue}
						placeholder={placeholder}
						onChange={onTextFieldChanged}
					/>
				</div>
				<div className={S.send} onClick={onSendClick}>
					Send
				</div>
				{
					enableMicrophone && (
						<div className={`${S.microphone}`}>
							<i className="fa fa-microphone" aria-hidden="true" />
						</div>
					)
				}
			</div>
		</div>
	);
};

export default UserInput;
