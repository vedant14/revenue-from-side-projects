import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	> div {
		display: flex;
		align-items: center;
		> p:last-child {
			margin-left: 10px;
		}
	}
	> div#question {
		margin: 0px;
	}
	> div#intro {
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
	> a {
		text-decoration: underline;
	}
`
