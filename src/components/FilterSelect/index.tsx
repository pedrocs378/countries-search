import { SelectHTMLAttributes } from "react"

import { Container } from './styles'

type FilterSelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function FilterSelect({ ...rest }: FilterSelectProps) {

	return (
		<Container {...rest}>
			<option value="" disabled>Filter by Region</option>
			<option value="africa">Africa</option>
			<option value="america">America</option>
			<option value="asia">Asia</option>
			<option value="eruope">Europe</option>
			<option value="oceania">Oceania</option>
		</Container>
	)
}