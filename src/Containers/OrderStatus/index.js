import React from 'react'
import { ResponsivePie } from '@nivo/pie'

const data = [
	{
		id: 'success',
		label: 'Success',
		value: 55,
		color: 'green',
	},
	{
		id: 'pending',
		label: 'Pending',
		value: 33,
		color: 'hsl(164, 70%, 50%)',
	},
	{
		id: 'failed',
		label: 'Failed',
		value: 12,
		color: 'hsl(137, 70%, 50%)',
	},
]

const margin = { top: 30, right: 200, bottom: 30, left: 110 }

const styles = {
	root: {
		height: '100%',
		minHeight: '80%',
		width: '100%',
		textAlign: 'center',
		position: 'relative',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		right: margin.right,
		bottom: 0,
		left: margin.left,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#00000',
		textAlign: 'center',
		pointerEvents: 'none',
	},
	label: {
		fontSize: 12,
	},
	subLabel: {
		fontSize: 18,
		fontWeight: 600,
	},
}
const colors = { pending: '#ffc632', failed: '#ed3333', success: '#18bf6b' }

const OrderStatus = () => {
	const getColor = (bar) => colors[bar.id]
	return (
		<div style={styles.root}>
			<ResponsivePie
				data={data}
				margin={{ top: 24, right: 80, bottom: 10, left: 10 }}
				startAngle={0}
				sortByValue={false}
				innerRadius={0.6}
				activeOuterRadiusOffset={8}
				colors={getColor}
				borderWidth={0}
				borderColor={{ from: 'color', modifiers: [['brighter', 0.2]] }}
				enableArcLinkLabels={false}
				arcLabelsRadiusOffset={0.5}
				arcLabelsSkipAngle={11}
				arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
				legends={[
					{
						anchor: 'right',
						direction: 'column',
						justify: false,
						translateX: 70,
						translateY: 0,
						itemWidth: 60,
						itemHeight: 15,
						itemsSpacing: 0,
						symbolSize: 12,
						itemDirection: 'left-to-right',
					},
				]}
			/>
			<div style={styles.overlay}>
				<span style={styles.label}>Ratio</span>
				<span style={styles.subLabel}>100%</span>
			</div>
		</div>
	)
}

export default OrderStatus
