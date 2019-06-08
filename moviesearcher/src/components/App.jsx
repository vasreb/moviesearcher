import React from 'react'
import { Suspense } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import Header from './Header.jsx'

const FilmList = React.lazy(() => import('./FilmList.jsx'))
const Page404 = React.lazy(() => import('./Page404.jsx'))
const FilmPage = React.lazy(() => import('./FilmPage.jsx'))

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
						<Route exact path="/" component={FilmList} />
						<Route exact path="/404" component={Page404} />
						<Route exact path="/film/:id" component={FilmPage} />
						<Route exact path="/best" component={FilmList} />
						<Route exact path="/favorite" component={FilmList} />
					</Switch>
				</Suspense>
			</MainWrapper>
		</AppWrapper>
	)
}

export default App
