import { currentDate } from "./nicedate.js";
const endpoint = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key='+process.env.NYT_KEY

export const getNews = async () => {
	const results = await fetch(endpoint);
	const body = await results.json()
	const rawNews = body.results;
	const news = rawNews.map(article => {
		const { section, title, abstract, byline, published_date, short_url } = article
		const publishedDate = currentDate(published_date)
		return {
			section, title,
			abstract, byline,
			publishedDate, short_url
		}
	})
	return news
}