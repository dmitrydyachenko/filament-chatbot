import * as React from 'react';
import TimeStamp from '../../Common/TimeStamp/TimeStamp.jsx';

import S from './ImageMessage.module.scss';

const ImageMessage = (props) => {
	const { value, timeStamp } = props.message;
	const { uri } = value.message;

	const mainContent = (
		<div className={S.body}>
			<div className={S.content}>
				<div className={S.image}>
					<div>
						<img src={uri} alt="" />
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

export default ImageMessage;
