import React from 'react'
import { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import ReactLoading from 'react-loading'
import { AppWrapper, CenterLoadingWrapper } from './style.js'
import ErrorPage from '../ErrorPage/ErrorPage.jsx'
import MainWrapperBoundary from '../MainWrapperBoundary/MainWrapperBoundary.jsx'

const Best = React.lazy(() => import('../../containers/Best.jsx'))
const FilmPage = React.lazy(() => import('../FilmPage/FilmPage.jsx'))
const Search = React.lazy(() => import('../../containers/Search.jsx'))
const Favorites = React.lazy(() => import('../../containers/Favorites.jsx'))

function App() {
	return (
		<AppWrapper>
			<Header />
			<MainWrapperBoundary>
				<Suspense
					fallback={
						<CenterLoadingWrapper>
							<ReactLoading type="bubbles" color="black" />
						</CenterLoadingWrapper>
					}
				>
					<Switch>
						<Route exact path="/" component={Best} />
						<Route exact path="/404" component={ErrorPage} />
						<Route exact path="/film/:id" component={FilmPage} />
						<Route exact path="/best" component={Best} />
						<Route exact path="/favorites" component={Favorites} />
						<Route exact path="/search" component={Search} />
					</Switch>
				</Suspense>
			</MainWrapperBoundary>
		</AppWrapper>
	)
}

export default App
