import React from 'react'
import { Suspense } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import Header from './Header.jsx'

const Best = React.lazy(() => import('./../containers/Best.jsx'))
const Page404 = React.lazy(() => import('./Page404.jsx'))
const FilmPage = React.lazy(() => import('./FilmPage.jsx'))
const Search = React.lazy(() => import('./../containers/Search.jsx'))

const AppWrapper = styled.div`
	background-color: Snow;
	height: 100%;
	width: 100%;
`
const MainWrapper = styled.main`
	position: relative;
	width: 100%;
	height: 100%;
`

function App() {
	return (
		<AppWrapper>
			<Header />
			<MainWrapper>
				<Suspense fallback="loading">
					<Switch>
						<Route exact path="/" component={Best} />
						<Route exact path="/404" component={Page404} />
						<Route exact path="/film/:id" component={FilmPage} />
						<Route exact path="/best" component={Best} />
						<Route exact path="/favorite" component={Best} />
						<Route exact path="/search" component={Search} />
					</Switch>
				</Suspense>
			</MainWrapper>
		</AppWrapper>
	)
}

export default App
