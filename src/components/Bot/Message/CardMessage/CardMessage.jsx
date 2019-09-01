import * as React from 'react';
import TimeStamp from '../../Common/TimeStamp/TimeStamp.jsx';
import { createMarkup } from '../../../../utils/common';

import S from './CardMessage.module.scss';

const CardMessage = (props) => {
	const { value, timeStamp } = props.message;
	const { text, title, postback, url } = value.message;

	const mainContent = (
		<div className={S.body}>
			<div className={S.header}>
				<div className={S.title}>
					{title}
				</div>
			</div>
			<div className={S.content}>
				<div className={S.image}>
					<div>
						<img src={url} alt="" />
					</div>
				</div>
				<div className={S.info_container}>
					<div className={S.text} dangerouslySetInnerHTML={createMarkup(text)} />
					<div className={S.link}>
						<a href={postback} target="_blank" rel="noopener noreferrer">
							More...
						</a>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className={`${S.container} ${S.left}`}>
			<div className={S.content_container}>
				<div className={S.message}>
					{mainContent}
				</div>
			</div>
			<TimeStamp value={timeStamp} />
		</div>
	);
};

export default CardMessage;
