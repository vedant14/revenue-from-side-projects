import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 15px;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 50px;
	}
	> button {
		padding: 20px;
		border: none;
		background: ${colors.primary};
		color: ${colors.white};
		font-size: 1.2rem;
		border-radius: 4px;
		cursor: pointer;
		@media (min-width: 768px) {
			padding: 30px;
		}
	}
`
