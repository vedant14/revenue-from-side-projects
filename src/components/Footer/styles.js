import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const FooterWrapper = styled.div`
	background: ${colors.white};
	margin-top: 50px;
	overflow: hidden;
	padding: 30px auto;
	> div {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 5px;
		grid-template-areas:
			"social"
			"title";
		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
			grid-template-areas: "title social";
		}

		> div#social {
			grid-area: social;
			margin: auto;
			padding: 30px 0px;
			@media (min-width: 768px) {
				padding: 50px 0px;
			}
			> a > img {
				width: 40px;
				margin: 8px;
				@media (min-width: 768px) {
					width: 40px;
					margin: 10px;
				}
			}
			> a:first-child {
				> img {
					margin-left: 0px;
				}
			}
			> a:last-child {
				> img {
					margin-right: 0px;
				}
			}
		}

		> div#title {
			margin: 10px auto 30px auto;
			@media (min-width: 768px) {
				margin: 40px 0px;
			}
			line-height: 14px;
			grid-area: title;
			> p {
				color: ${colors.primaryBlack};
				margin: 0px;
			}
		}
	}
`
