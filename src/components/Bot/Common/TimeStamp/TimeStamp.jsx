import * as React from 'react';
import { useTheme } from '../../Theme/ThemeContext';
import moment from 'moment';

import S from './TimeStamp.module.scss';

const TimeStamp = (props) => {
	const { value, orientation } = props;

	const themeState = useTheme();
	const isDark = themeState.dark;

	return (
		<div className={`${S.timestamp_container} ${orientation === 'right' ? S.right : S.left}`}>
			<div className={`${S.timestamp} ${isDark ? S.dark : S.light}`}>
				{value || moment().format('LT')}
			</div>
		</div>
	);
};

export default TimeStamp;
