import styled from 'styled-components'

export const Review = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

export const Rating = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 16px;
	margin-top: 1.5rem;
	align-items: center;
`
export const RatingNumber = styled.div`
	font-size: 20px;
	font-weight: bolder;
	margin-left: 1.5rem;
`
export const Text = styled.p`
	font-size: 11px;
	color: #848585;
`
export const Filter = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin-top: 2rem;
`
export const Button = styled.button`
	border-radius: 2rem;
	padding: 1rem;
	align-self: center;
	margin-top: 2rem;
	color: #1c6bf1;
	background-color: #e7f0fe;
	border: none;
`
