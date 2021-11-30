import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styledComponents'

const ProgressBar = ({ value, max, valueColor, barColor }) => {
	return (
		<Container color={valueColor} barColor={barColor}>
			<progress value={value} max={max} />
		</Container>
	)
}

ProgressBar.propTypes = {
	value: PropTypes.number,
	max: PropTypes.number,
	valueColor: PropTypes.string,
	barColor: PropTypes.string,
}

export default ProgressBar
