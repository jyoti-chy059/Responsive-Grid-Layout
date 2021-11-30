import React from 'react'
import Card from '../Components/Card'
import conversion from '../icons/conversation_icon.svg'

const ConversionRate = () => {
	return (
		<Card
			icon={conversion}
			backgroundColor={'#f39614'}
			title={'69.5%'}
			subTitle={'Conversion Rate'}
			backgroundSize={'90% 90%'}
		/>
	)
}

export default ConversionRate
