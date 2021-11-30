import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer, ImageContainer, Title } from './StyledComponent'

const Card = ({ icon, title, subTitle, backgroundColor, backgroundSize }) => {
	return (
		<CardContainer>
			<ImageContainer background={icon} backgroundColor={backgroundColor} backgroundSize={backgroundSize} />
			<Title>{title}</Title>
			<p>{subTitle}</p>
		</CardContainer>
	)
}

Card.propTypes = {
	icon: PropTypes.any,
	title: PropTypes.string,
	subTitle: PropTypes.string,
	backgroundColor: PropTypes.string,
	backgroundSize: PropTypes.string,
}

export default Card
