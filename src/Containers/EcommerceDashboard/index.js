import React from 'react'
import ConversionRate from '../conversionRate'
import CustomerReview from '../CustomerReview'
import EarnGrowth from '../earnGrowth'
import GrossProfitMargin from '../grossProfitMargin'
import MonthlyRevenue from '../monthlyRevenue'
import {
	DashboardContainer,
	CustomerReviewContainer,
	GoalContainer,
	OrderStatus,
	TopSeller,
	PerformanceContainer,
	TaskContainer,
	Revenue,
	Growth,
	Conversion,
	GPM,
} from './StyledComponents'

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
			<GoalContainer />
			<OrderStatus />
			<TopSeller />
			<PerformanceContainer />
			<TaskContainer />
		</DashboardContainer>
	)
}

export default EDashboard
