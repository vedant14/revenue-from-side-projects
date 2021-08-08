import React from "react"
import { Nav } from "./styles"

export function Menu() {
	return (
		<Nav>
			<li>Follow us on:</li>
			<li>
				<a
					href="https://www.instagram.com/sheroesindia/"
					target="_blank"
					rel="noreferrer"
				>
					instagram
				</a>
			</li>
			<li>
				<a href="https://twitter.com/sheroes" target="_blank" rel="noreferrer">
					twitter
				</a>
			</li>
			<li>
				<a href="https://sheroes.com/">Login/Signup</a>
			</li>
		</Nav>
	)
}
