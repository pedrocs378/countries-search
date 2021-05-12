import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { setCookie, parseCookies } from 'nookies'

type Response<T> = [
	T,
	Dispatch<SetStateAction<T>>
]

export function usePersistedState<T>(key: string, initialState: any): Response<T> {
	const [state, setState] = useState(() => {
		const { key: storagedValue } = parseCookies()

		if (storagedValue) {
			return JSON.parse(storagedValue)
		}

		return initialState
	})

	useEffect(() => {
		setCookie(undefined, key, JSON.stringify(state))
	}, [key, state])

	return [state, setState]
}