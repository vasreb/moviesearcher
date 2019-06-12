import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 10000,
})

// /movie/top_rated?api_key=9d923168206684ddbd944abae426483e top rated
//
