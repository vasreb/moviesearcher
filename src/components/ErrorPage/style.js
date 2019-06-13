import styled from 'styled-components'
const ErrorWrapper = styled.div`
	margin: 0 auto;
	text-align: center;
`

const ErrorTitle = styled.h2`
	margin: 0;
	font-size: 200px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const ErrorText = styled.p`
	font-size: 40px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const ErrorInfo = styled(ErrorText)`
	font-size: 15px;
	font-style: italic;
`

export { ErrorWrapper, ErrorTitle, ErrorText, ErrorInfo }
