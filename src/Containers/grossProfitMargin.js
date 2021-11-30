import React from 'react'
import Card from '../Components/Card'
import conversion from '../icons/saving_icon.svg'

const GrossProfitMargin = () => {
	return (
		<Card
			icon={conversion}
			backgroundColor={'#fd7f30'}
			title={'38.05%'}
			subTitle={'Gross Profit Margin'}
			backgroundSize={'60% 55%'}
		/>
	)
}

export default GrossProfitMargin
