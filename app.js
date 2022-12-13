import tache from 'mustache'
import { getNews } from './services/getnews.js'
import { currentDate } from './services/nicedate.js'
import { readFileSync, writeFileSync } from 'node:fs'

const mainfile = './main.mustache'

const news = await getNews(12);

let data = {
	name: 'Robert Ismo',
	date: currentDate(),
	news,
	messages: [
		{
			message: 'Thomas Guibert',
			link: `https://github.com/thmsgbrt/thmsgbrt`,
			linkmessage: 'Check out some of his work!'
		}
	]
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