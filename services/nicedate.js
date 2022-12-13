export const currentDate = (date) => new Date(date ?? Date.now()).toLocaleDateString('en-US', {
	weekday: 'long',
	month: 'long',
	day: 'numeric',
	timeZoneName: 'longGeneric',
	timeZone: 'America/Chicago'
}).replace(' at', ',').replace('Time', 'Standard Time')