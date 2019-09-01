import React from 'react';
import BotContainer from './components/Bot/BotContainer';
import { ThemeProvider } from "./components/Bot/Theme/ThemeContext";
import { BOTURL, BOTID, BOTPROVIDERID, WELCOMEMESSAGE } from './utils/settings';

import './App.scss';

function App() {
	const settings = {
		botUrl: BOTURL,
		botId: BOTID,
		botProviderId: BOTPROVIDERID,
		welcomeMessage: WELCOMEMESSAGE,
	};

	return (
		<ThemeProvider>
			<BotContainer settings={settings} />
		</ThemeProvider>
	);
}

export default App;
