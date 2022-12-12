import tache from 'mustache'
import { readFileSync, writeFileSync } from 'node:fs'

const mainfile = './main.mustache'

const currentDate = () => new Date().toLocaleDateString('en-US', {
	weekday: 'long',
	month: 'long',
	day: 'numeric',
	timeZoneName: 'longGeneric',
	timeZone: 'America/Chicago'
})

let data = {
	name: 'Robert Ismo',
	date: currentDate(),
	message1: {
		message: 'Thomas Guibert',
		link: `https://github.com/thmsgbrt/thmsgbrt`,
		linkmessage: 'Check out some of his work!'
	}
}

const buildREADME = () => {
	try {
		const mustachefile = readFileSync(mainfile)
		const output = tache.render(mustachefile.toString(), data)
		writeFileSync('README.md', output);
	} catch(e) {
		throw e
	}
}

buildREADME()