import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	margin-top: 140px;
	> button {
		background: ${colors.primary};
		border: none;
		transition: 0.25s;
		padding: 20px 60px;
		cursor: pointer;
		margin: 100px 0px;
		> p {
			color: ${colors.white};
		}
		border-radius: 4px;
		box-shadow: 5px 5px 4px ${colors.washedBlack};
		&:hover {
			box-shadow: 3px 3px 3px ${colors.washedBlack};
		}
	}
`
