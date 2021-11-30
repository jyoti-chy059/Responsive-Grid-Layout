import React from 'react'
import styled from 'styled-components'
import ProgressBar from '../Progress'
import PropTypes from 'prop-types'

const Container = styled.div`
	width: 100%;
	margin-top: 2rem;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	grid-template-rows: repeat(1, auto);
`

const ReviewBar = ({ text, value, max, valueColor, barColor }) => {
	return (
		<Container>
			<span>{text}</span>
			<ProgressBar max={max} value={value} valueColor={valueColor} barColor={barColor} />
			<span>{value}</span>
		</Container>
	)
}

ReviewBar.propTypes = {
	text: PropTypes.string,
	value: PropTypes.number,
	max: PropTypes.number,
	valueColor: PropTypes.string,
	barColor: PropTypes.string,
}

export default ReviewBar
