import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
import styled from 'styled-components'
import businessGrowthIcon from '../../icons/business_growth.png'

const data = [
	{
		id: 'December',
		data: [
			{
				x: '05 Dec',
				y: 125,
			},
			{
				x: '06 Dec',
				y: 110,
			},
			{
				x: '07 Dec',
				y: 140,
			},
			{
				x: '10 Dec',
				y: 140,
			},
			{
				x: '15 Dec',
				y: 60,
			},
			{
				x: '20 Dec',
				y: 105,
			},
			{
				x: '25 Dec',
				y: 100,
			},
			{
				x: '26 Dec',
				y: 130,
			},
			{
				x: '30 Dec',
				y: 120,
			},
		],
	},
]
const colors = { December: '#1868f1' }

const getColor = (bar) => colors[bar.id]
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

const GoalGraph = () => (
	<div style={{ width: '100%', height: '100%' }}>
		<Header>
			<h3>Goal completion</h3>
			<img src={businessGrowthIcon} alt="business growth" style={{ maxWidth: '3%' }} />
		</Header>
		<ResponsiveLine
			data={data}
			margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
			xScale={{ type: 'point' }}
			yScale={{ type: 'linear', min: '0', max: '150', stacked: true, reverse: false }}
			colors={getColor}
			curve={'linear'}
			enablePoints={false}
			yFormat=" >-.2f"
			axisTop={null}
			axisRight={null}
			axisBottom={{
				orient: 'bottom',
				tickSize: 0,
				tickPadding: 5,
				tickRotation: 0,
				// legend: 'transportation',
				// legendOffset: 36,
				// legendPosition: 'middle',
			}}
			axisLeft={{
				orient: 'left',
				tickSize: 0,
				tickPadding: 5,
				tickRotation: 0,
				// legend: 'count',
				// legendOffset: 0,
				// legendPosition: 'middle',
			}}
			useMesh={true}
			enableGridX={false}
			enableGridY={false}
			gridYValues={['0', '50', '100', '150', '200']}
			legends={[
				{
					anchor: 'top-right',
					direction: 'column',
					justify: false,
					translateX: 100,
					translateY: 0,
					itemsSpacing: 0,
					itemDirection: 'left-to-right',
					itemWidth: 80,
					itemHeight: 20,
					itemOpacity: 0.75,
					symbolSize: 12,
					symbolShape: 'circle',
					symbolBorderColor: 'rgba(0, 0, 0, .5)',
					effects: [
						{
							on: 'hover',
							style: {
								itemBackground: 'rgba(0, 0, 0, .03)',
								itemOpacity: 1,
							},
						},
					],
				},
			]}
			enableArea={true}
			defs={[
				linearGradientDef('gradientC', [
					{ offset: 0, color: 'inherit' },
					{ offset: 100, color: 'inherit', opacity: 0.33 },
				]),
			]}
			fill={[{ match: '*', id: 'gradientC' }]}
		/>
	</div>
)

export default GoalGraph
