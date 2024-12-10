import MenuItem from '@mui/material/MenuItem'
import Select, { SelectProps } from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'

export default function ColorModeSelect(props: SelectProps) {
	const { mode, setMode } = useColorScheme()
	const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>(
		'dark'
	)

	useEffect(() => {
		// If `mode` is not set, default to 'dark' theme
		if (!mode) {
			setMode('dark')
		}
	}, [mode, setMode])
	if (!mode) {
		return null
	}
	return (
		<Select
			value={mode}
			onChange={event =>
				setMode(event.target.value as 'system' | 'light' | 'dark')
			}
			SelectDisplayProps={{
				// @ts-ignore
				'data-screenshot': 'toggle-mode',
			}}
			{...props}
		>
			<MenuItem value='system'>System</MenuItem>
			<MenuItem value='light'>Light</MenuItem>
			<MenuItem value='dark'>Dark</MenuItem>
		</Select>
	)
}
