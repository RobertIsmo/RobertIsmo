import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
	apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(config);

export const generateBlurb = async (articles) => {
	const prompt = 'Given this list of news articles:\n\n'+articles.map(({ section, title, abstract }) => {
		return `${section}\n${title}\n${abstract}`
	}).join('\n\n')+'\nDescribe what is happening in the world to a close friend\n'
	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt,
		max_tokens: 2500,
		presence_penalty: .3,
		frequency_penalty: .3
	})
	return completion.data.choices[0].text
}