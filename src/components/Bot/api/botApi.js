export function getAPIResponse(url, data) {
	return new Promise((resolve, reject) => {
		fetch(url,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json; charset=UTF-8' },
				body: JSON.stringify(data),
			})
			.then(r => r.json())
			.then((response) => {
				resolve(processAPIResponse(response));
			})
			.catch(reject);
	});
}

function processAPIResponse(data) {
	if (data) {
		const { status } = data;

		if (status) {
			const bt = data.bot_response;

			if (status === 'misunderstood') {
				return [{
					type: 'text',
					data: [{
						text: (bt && bt.length ? bt[0] : { speech: '' }).speech,
					}],
				}];
			}

			if (status === 'understood') {
				const botResponse = bt && bt.length ? bt : [];

				if (botResponse && botResponse.length) {
					return botResponse.map((response) => {
						switch (response.type) {
							case 0:
								return {
									type: 'text',
									data: (response.speech).map(text => ({ text })),
								};
							case 5:
								return {
									type: 'image',
									data: response.images,
								};
							case 6:
								return {
									type: 'card',
									data: response.cards,
								};
							default:
								return {
									type: 'text',
									data: [{
										text: 'I\'m sorry, I didn\'t understand that. Can you rephrase it?',
									}],
								};
						}
					});

				}
			}
		}
	}

	return [{ type: 'error' }];
}
