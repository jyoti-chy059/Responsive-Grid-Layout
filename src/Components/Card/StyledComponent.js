import styled from 'styled-components'

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5 px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
	background: #ffffff;
	padding: 1rem;
	border-radius: 1rem;
	width: 13rem;
	height: 15rem;
	@media (max-width: 700px) {
		width: auto;
		height: auto;
	}
`
export const ImageContainer = styled.div`
	width: 80px;
	height: 80px;
	margin-bottom: 10px;
	border-radius: 50%;
	background: ${(props) => `url(${props.background}) no-repeat center center`};
	background-color: ${(props) => props.backgroundColor || '#ff6869'};
	background-size: ${(props) => props.backgroundSize || '50% 50%'};
`

export const Image = styled.img`
	width: 100%;
	height: 100%;
`

export const Title = styled.div`
	font-size: 1.3rem;
	margin-bottom: 10px;
	font-weight: 900;
`
