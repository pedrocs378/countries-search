import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { setCookie, parseCookies } from 'nookies'

type Response<T> = [
	T,
	Dispatch<SetStateAction<T>>
]

export function usePersistedState<T>(key: string, initialState: any): Response<T> {
	const [state, setState] = useState(() => {
		const cookies = parseCookies()

		if (cookies[key]) {
			const storagedValue = cookies[key]

			return JSON.parse(storagedValue)
		}

		return initialState
	})

	useEffect(() => {
		setCookie(undefined, key, JSON.stringify(state), {
			path: '/',
			maxAge: 60 * 60 * 24 * 30 * 12
		})
	}, [key, state])

	return [state, setState]
}