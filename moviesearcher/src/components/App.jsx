import React from 'react'
import { Suspense } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import HeaderContainer from './../containers/HeaderContainer'
import ReactLoading from 'react-loading'

const Best = React.lazy(() => import('./../containers/Best.jsx'))
const Page404 = React.lazy(() => import('./Page404.jsx'))
const FilmPage = React.lazy(() => import('./FilmPage.jsx'))
const Search = React.lazy(() => import('./../containers/Search.jsx'))
const Favorites = React.lazy(() => import('./../containers/Favorites.jsx'))

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
const CenterLoadingWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

function App() {
	return (
		<AppWrapper>
			<HeaderContainer />
			<MainWrapper>
				<Suspense
					fallback={
						<CenterLoadingWrapper>
							<ReactLoading type="bubbles" color="black" />
						</CenterLoadingWrapper>
					}
				>
					<Switch>
						<Route exact path="/" component={Best} />
						<Route exact path="/404" component={Page404} />
						<Route exact path="/film/:id" component={FilmPage} />
						<Route exact path="/best" component={Best} />
						<Route exact path="/favorites" component={Favorites} />
						<Route exact path="/search" component={Search} />
					</Switch>
				</Suspense>
			</MainWrapper>
		</AppWrapper>
	)
}

export default App
