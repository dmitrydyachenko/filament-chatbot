import * as React from 'react';
import { useTheme } from '../../Theme/ThemeContext';
import { createMarkup } from '../../../../utils/common';
import TimeStamp from '../../Common/TimeStamp/TimeStamp.jsx';

import S from './TextMessage.module.scss';

const TextMessage = (props) => {
	const { value, timeStamp, image, orientation, isReplying } = props.message;

	const themeState = useTheme();
	const isDark = themeState.dark;

	const mainContent = isReplying ?
		(
			<div className={S.body}>
				<div className={S.replying}>
					<div className={S.bounce1} />
					<div className={S.bounce2} />
					<div className={S.bounce3} />
				</div>
			</div>
		)
		:
		(
			<div
				className={S.body}
				dangerouslySetInnerHTML={createMarkup((value.message).text)}
			/>
		);

	return (
		<div className={`${S.container} ${orientation === 'right' ? S.right : S.left} ${isDark ? S.dark : S.light}`}>
			<div className={S.content_container}>
				<div className={S.icon}>
					<div className={S.image} style={{ backgroundImage: `url('${image}')` }} />
				</div>
				{
					orientation === 'left' && (
						<div className={S.arrow} />
					)
				}
				<div className={S.message}>
					{mainContent}
				</div>
				{
					orientation === 'right' && (
						<div className={S.arrow} />
					)
				}
			</div>
			<TimeStamp value={timeStamp} orientation={orientation} />
		</div>
	);
};

export default TextMessage;
