import React from "react"
import { LayoutWrapper } from "./styles"
import { GlobalStyles } from "../../styles/GlobalStyles"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
export function Layout({ children }) {
	return (
		<div>
			<GlobalStyles />
			<div className="Container">
				<main>{children}</main>
			</div>
		</div>
	)
}
