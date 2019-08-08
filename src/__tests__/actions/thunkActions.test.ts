import { API_KEY } from '../../constants/constants'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ActionTypeKeys } from '../../actions/ActionTypeKeys'
import MockAdapter from 'axios-mock-adapter'
import Axios from '../../constants/axios'

import fetchBestFilms from '../../actions/fetchBestFilms'
import fetchFavoriteCard from '../../actions/fetchFavoriteCard'
import { SpecifyMovie } from '../../models/SpecifyMovie'
import fetchMovie from '../../actions/fetchMovie'
import { fetchSearchFilms } from '../../actions/fetchSearchFilms'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Thunk Async Actions', () => {
	let random1
	let random2

	beforeEach(() => {
		random1 = Math.floor(Math.random() * (1000 - -1000)) + 1000
		random2 = Math.floor(Math.random() * (1000 - -1000)) + 1000
	})

	afterEach(() => {
		fetchMock.restore()
	})

	test('Fetch Best Films: Success', async () => {
		const mock = new MockAdapter(Axios)
		mock.onGet(`/movie/top_rated?api_key=${API_KEY}&page=1`).reply(200, {
			total_pages: random1,
			results: [
				{
					id: random2,
					overview: 'simple text',
					title: 'simple title',
					poster_path: 'test://url',
				},
			],
		})
		const expectedActions = [
			{
				type: ActionTypeKeys.GET_BEST_REQUEST,
			},
			{
				type: ActionTypeKeys.GET_BEST_SUCCESS,
				payload: {
					data: [
						{
							id: random2,
							overview: 'simple text',
							title: 'simple title',
							posterUrl: 'test://url',
						},
					],
					totalPages: random1,
				},
			},
		]
		const store = mockStore({})
		await store.dispatch(fetchBestFilms()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetch Best Films: Failed', async () => {
		const mock = new MockAdapter(Axios)
		mock.onGet(`/movie/top_rated?api_key=${API_KEY}&page=1`).reply(404, {})
		const expectedActions = [
			{
				type: ActionTypeKeys.GET_BEST_REQUEST,
			},
			{
				type: ActionTypeKeys.GET_ERROR,
				payload: 'Request failed with status code 404',
			},
		]
		const store = mockStore({})
		await store.dispatch(fetchBestFilms()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetch Favorite Card: Success', async () => {
		const mock = new MockAdapter(Axios)
		mock.onGet(`/movie/228?api_key=${API_KEY}`).reply(200, {
			id: random2,
			overview: 'simple text',
			title: 'simple title',
			poster_path: 'test://url',
		})
		const expectedActions = [
			{
				type: ActionTypeKeys.GET_FAV_FILM_REQUEST,
			},
			{
				type: ActionTypeKeys.GET_FAV_FILM_SUCCESS,
				payload: {
					id: random2,
					overview: 'simple text',
					title: 'simple title',
					posterUrl: 'test://url',
				},
			},
		]
		const store = mockStore({})
		await store.dispatch(fetchFavoriteCard(228)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetch Favorites Films: Failed', async () => {
		const mock = new MockAdapter(Axios)
		mock.onGet(`/movie/228?api_key=${API_KEY}`).reply(404, {})
		const expectedActions = [
			{
				type: ActionTypeKeys.GET_FAV_FILM_REQUEST,
			},
			{
				type: ActionTypeKeys.GET_ERROR,
				payload: 'Request failed with status code 404',
			},
		]
		const store = mockStore({})
		await store.dispatch(fetchFavoriteCard(228)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetch Movie: Success', async () => {
		const mock = new MockAdapter(Axios)
		const movie: SpecifyMovie = {
			title: 'title test',
			overview: 'overview',
			genres: [
				{
					id: 228,
					name: 'fff',
				},
			],
			vote_average: 124,
			vote_count: 824,
			release_date: '914914',
			tagline: 'faskjoffjaoaf',
			revenue: 129492,
			budget: 21421042,
			status: 'fsaffasfofkw',
			id: 198421848421,
			poster_path: '/sakfkasofaskof.fasjfj',
		}

		mock.onGet(`/movie/228?api_key=${API_KEY}`).reply(200, movie)
		const expectedActions = [
			{
				type: ActionTypeKeys.GET_MOVIE_REQUEST,
			},
			{
				type: ActionTypeKeys.GET_MOVIE_SUCCESS,
				payload: movie,
			},
		]
		const store = mockStore({})
		await store.dispatch(fetchMovie(228)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetch Movie: Failed', async () => {
		const mock = new MockAdapter(Axios)
		mock.onGet(`/movie/228?api_key=${API_KEY}`).reply(404, {})
		const expectedActions = [
			{
				type: ActionTypeKeys.GET_MOVIE_REQUEST,
			},
			{
				type: ActionTypeKeys.GET_ERROR,
				payload: 'Request failed with status code 404',
			},
		]
		const store = mockStore({})
		await store.dispatch(fetchMovie(228)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetch Search Films: Success', async () => {
		const mock = new MockAdapter(Axios)
		mock.onGet(`/somelink&page=1`).reply(200, {
			total_pages: random1,
			results: [
				{
					id: random2,
					overview: 'simple text',
					title: 'simple title',
					poster_path: 'test://url',
				},
			],
		})
		const expectedActions = [
			{
				type: ActionTypeKeys.GET_SEARCH_REQUEST,
			},
			{
				type: ActionTypeKeys.GET_SEARCH_SUCCESS,
				payload: {
					data: [
						{
							id: random2,
							overview: 'simple text',
							title: 'simple title',
							posterUrl: 'test://url',
						},
					],
					totalPages: random1,
				},
			},
		]
		const store = mockStore({})
		await store.dispatch(fetchSearchFilms(1, '/somelink')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetch Search Films: Failed', async () => {
		const mock = new MockAdapter(Axios)
		mock.onGet(`/somelink&page=1`).reply(404, {})
		const expectedActions = [
			{
				type: ActionTypeKeys.GET_SEARCH_REQUEST,
			},
			{
				type: ActionTypeKeys.GET_ERROR,
				payload: 'Request failed with status code 404',
			},
		]
		const store = mockStore({})
		await store.dispatch(fetchSearchFilms(1, '/somelink')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})
