import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	> div:first-child {
		border-radius: 4px;
		padding: 30px 60px;
		display: flex;
		align-items: center;
		width: fit-content;
		> p {
			color: ${colors.white};
			margin-left: 10px;
		}
		> img {
			width: 30px;
			height: 30px;
		}
	}
	> div#correctTerm {
		background: green;
	}
	> div#wrongTerm {
		background: red;
	}
	> div#trivia {
		background: #f7f6f3;
		border-radius: 4px;
		padding: 30px;
		display: flex;
		margin: 20px 0px;
		width: fit-content;
		align-items: center;
		> p {
			margin: 0px 0px 0px 10px;
		}
	}
	> button {
		padding: 20px;
		border: none;
		margin: 30px 0px;
		cursor: pointer;
		box-shadow: 5px 5px 4px ${colors.washedBlack};
		&:hover {
			box-shadow: 3px 3px 3px ${colors.washedBlack};
		}
	}
`
