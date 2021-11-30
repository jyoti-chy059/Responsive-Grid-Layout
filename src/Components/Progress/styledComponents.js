import styled from 'styled-components'

export const Container = styled.div`
	progress[value] {
		width: 15rem;
		appearance: none;
		::-webkit-progress-bar {
			height: 12px;
			border-radius: 20px;
			background-color: ${(props) => props.barColor};
		}

		::-webkit-progress-value {
			height: 12px;
			border-radius: 20px;
			background-color: ${(props) => props.color};
		}
	}
`
