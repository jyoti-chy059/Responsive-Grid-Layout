import styled from 'styled-components'

export const DashboardContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: #fbfbfb;
	display: grid;
	padding: 2rem;
	grid-template-areas:
		'revenue revenue growth growth conversion conversion gpm gpm review review review review'
		'goal goal goal goal goal orderStatus orderStatus orderStatus review review review review'
		'topSeller topSeller topSeller topSeller performance performance performance performance performance task task task';

	grid-template-columns: repeat(12, minmax(100px, 1fr));
	grid-template-rows: repeat(3, auto);
	gap: 10px;

	@media (max-width: 700px) {
		grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
		grid-template-rows: minmax(auto, auto);
		grid-template-areas:
			'revenue revenue'
			'growth growth'
			'conversion conversion'
			'gpm gpm'
			'review review'
			'review review'
			'goal goal'
			'goal goal'
			'orderStatus orderStatus'
			'orderStatus orderStatus'
			'topSeller topSeller'
			'topSeller topSeller'
			'performance performance'
			'performance performance'
			'task task'
			'task task';
	}
`

export const Revenue = styled.div`
	grid-area: revenue;
`
export const Growth = styled.div`
	grid-area: growth;
`
export const Conversion = styled.div`
	grid-area: conversion;
`
export const GPM = styled.div`
	grid-area: gpm;
`

export const CustomerReviewContainer = styled.div`
	grid-area: review;
	background-color: #ffffff;
	box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
	border-radius: 1rem;
	padding: 2rem;
`
export const GoalContainer = styled.div`
	grid-area: goal;
	background-color: #ffa08c;
`

export const OrderStatus = styled.div`
	grid-area: orderStatus;
	background-color: #ffff64;
`

export const TopSeller = styled.div`
	grid-area: topSeller;
	background-color: #8cffa0;
`

export const PerformanceContainer = styled.div`
	grid-area: performance;
	background-color: #f587a4;
`

export const TaskContainer = styled.div`
	grid-area: task;
	background-color: #395fe6;
`
