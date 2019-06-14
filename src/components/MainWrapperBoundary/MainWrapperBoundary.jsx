import React from 'react'
import { Component } from 'react'
import ErrorPage from '../ErrorPage/ErrorPage.jsx'
import styled from 'styled-components'

const MainWrapper = styled.main`
	position: relative;
	width: 100%;
	height: 100%;
`

export default class MainWrapperBoundary extends Component {
	state = {
		isError: false,
		error: null,
	}
	static getDerivedStateFromError(error) {
		return { isError: true, error: error.message }
	}

	render() {
		if (this.state.isError) {
			return <ErrorPage error={this.state.error} />
		}

		return <MainWrapper>{this.props.children}</MainWrapper>
	}
}
