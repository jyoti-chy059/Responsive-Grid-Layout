import React from 'react'
import ConversionRate from '../conversionRate'
import CustomerReview from '../CustomerReview'
import EarnGrowth from '../earnGrowth'
import GrossProfitMargin from '../grossProfitMargin'
import MonthlyRevenue from '../monthlyRevenue'
import OrderStatus from '../OrderStatus'
import GoalGraph from '../GoalCompletion'

import {
	DashboardContainer,
	CustomerReviewContainer,
	GoalContainer,
	OrderStatusContainer,
	TopSeller,
	PerformanceContainer,
	TaskContainer,
	Revenue,
	Growth,
	Conversion,
	GPM,
	SubTitle,
	OrderStatusHeader,
} from './StyledComponents'
import businessGrowthIcon from '../../icons/business_growth.png'

const EDashboard = () => {
	return (
		<DashboardContainer>
			<Revenue>
				<MonthlyRevenue />
			</Revenue>
			<Growth>
				<EarnGrowth />
			</Growth>
			<Conversion>
				<ConversionRate />
			</Conversion>
			<GPM>
				<GrossProfitMargin />
			</GPM>
			<CustomerReviewContainer>
				<CustomerReview />
			</CustomerReviewContainer>
			<GoalContainer>
				<GoalGraph />
			</GoalContainer>
			<OrderStatusContainer>
				<OrderStatusHeader>
					<h3>Order Status</h3>
					<img src={businessGrowthIcon} alt="business growth" style={{ maxWidth: '6%' }} />
				</OrderStatusHeader>
				<SubTitle>Total Earnings of the Month</SubTitle>
				<OrderStatus />
			</OrderStatusContainer>
			<TopSeller />
			<PerformanceContainer />
			<TaskContainer />
		</DashboardContainer>
	)
}

export default EDashboard
