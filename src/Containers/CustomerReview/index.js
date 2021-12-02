import React from 'react'
import { Review, Header, Rating, RatingNumber, Text, Filter, Button } from './styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faFilter, faAngleDown, faSync } from '@fortawesome/free-solid-svg-icons'
import ReviewBar from '../../Components/Review/index'

const CustomerReview = () => {
	return (
		<Review>
			<Header>
				<h1>{'Customer Review'}</h1>
				{/* <Refresh src={RefreshIcon} alt="refreshicon" /> */}
				<FontAwesomeIcon icon={faSync} style={{ color: '#07c278' }}></FontAwesomeIcon>
			</Header>
			<Rating>
				<FontAwesomeIcon icon={faStar} style={{ color: '#fdc531', marginRight: '0.5rem' }}></FontAwesomeIcon>
				<FontAwesomeIcon icon={faStar} style={{ color: '#fdc531', marginRight: '0.5rem' }}></FontAwesomeIcon>
				<FontAwesomeIcon icon={faStar} style={{ color: '#fdc531', marginRight: '0.5rem' }}></FontAwesomeIcon>
				<FontAwesomeIcon icon={faStar} style={{ color: '#fdc531', marginRight: '0.5rem' }}></FontAwesomeIcon>
				<FontAwesomeIcon icon={faStarHalf} style={{ color: '#fdc531', marginRight: '0.5rem' }}></FontAwesomeIcon>
				<RatingNumber>4.8</RatingNumber>
				<Text style={{ marginLeft: '1rem' }}>Out of 5 Stars</Text>
			</Rating>
			<Text style={{ marginTop: '1rem' }}>{`Overall rating of customer's reviews`}</Text>
			<Filter>
				<FontAwesomeIcon icon={faFilter} style={{ color: '#848585' }}></FontAwesomeIcon>
				<Text style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>View filters</Text>
				<FontAwesomeIcon icon={faAngleDown} style={{ color: '#848585' }}></FontAwesomeIcon>
			</Filter>
			<ReviewBar text={'Excellent'} max={50} value={35} valueColor={'#18bf6b'} barColor={'#e8faf0'} />
			<ReviewBar text={'Good'} max={50} value={25} valueColor={'#42d98c'} barColor={'#ecfcf4'} />
			<ReviewBar text={'Average'} max={50} value={20} valueColor={'#ffc632'} barColor={'#fff9e9'} />
			<ReviewBar text={'Avg Below'} max={50} value={15} valueColor={'#e4a53c'} barColor={'#fcf6eb'} />
			<ReviewBar text={'Poor'} max={50} value={5} valueColor={'#ed3333'} barColor={'#fdebeb'} />
			<Text
				style={{ marginTop: '2rem', alignSelf: 'center' }}
			>{`Here is the result for the latest responses for last 100 customer`}</Text>
			<Button>{`See all Customer's Review`}</Button>
		</Review>
	)
}

export default CustomerReview
