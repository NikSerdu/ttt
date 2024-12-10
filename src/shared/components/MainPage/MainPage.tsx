import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { FC, useState } from 'react'
import Chart from 'react-apexcharts'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { generateRandomMetrics } from '../../../utils/generateRandomMetrics'
import AppTheme from '../../theme/shared-theme/AppTheme'
import { UserMetrics } from '../../types/userMetrics.type'

const MainContainer = styled(Stack)(({ theme }) => ({
	minHeight: '100%',
	padding: theme.spacing(2),
	[theme.breakpoints.up('sm')]: {
		padding: theme.spacing(4),
	},
	'&::before': {
		content: '""',
		display: 'block',
		position: 'absolute',
		zIndex: -1,
		inset: 0,
		backgroundImage:
			'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
		backgroundRepeat: 'no-repeat',
		...theme.applyStyles('dark', {
			backgroundImage:
				'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
		}),
	},
}))

const metricLabels = [
	'Активность',
	'Позитивность',
	'Частота сообщений',
	'Нарушения правил',
	'Токсичность',
	'Любопытство',
	'Отзывчивость',
]

export const MainPage: FC = (props: { disableCustomTheme?: boolean }) => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: { tgNik: '' },
	})

	const [chartData, setChartData] = useState<UserMetrics | null>(null)
	const [chartOptions, setChartOptions] = useState({
		chart: { type: 'radar', toolbar: { show: false } },
		xaxis: { categories: metricLabels },
	})

	const onSubmit = () => {
		const generatedData = generateRandomMetrics()
		setChartData(generatedData)
		reset() // Сбрасывает данные формы
	}

	return (
		<AppTheme {...props}>
			<CssBaseline enableColorScheme />
			{/* <ColorModeSelect
				sx={{ position: 'fixed', top: '1.5rem', right: '1rem' }}
			/> */}
			<Stack padding={3}>
				<Button variant='outlined' sx={{ marginLeft: 'auto', marginRight: 13 }}>
					<Link to={'/auth'}>Войти</Link>
				</Button>
			</Stack>
			<MainContainer direction='column' justifyContent='center'>
				<Box
					sx={{
						margin: '0 auto',
					}}
					component='form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<FormControl sx={{ width: '500px' }}>
						<FormLabel htmlFor='tgNik'>Введите имя пользователя tg:</FormLabel>
						<Controller
							name='tgNik'
							control={control}
							rules={{
								required: 'Имя пользователя обязательно',
								pattern: {
									value: /^[a-zA-Z0-9_]+$/,
									message: 'Допустимы только латинские буквы, цифры и _',
								},
							}}
							render={({ field }) => (
								<TextField
									{...field}
									error={!!errors.tgNik}
									helperText={errors.tgNik?.message}
									id='tgNik'
									type='text'
									placeholder='username'
									autoFocus
									required
									variant='outlined'
								/>
							)}
						/>
					</FormControl>
				</Box>

				{chartData &&
					chartData.metrics &&
					Object.values(chartData.metrics).length > 0 && (
						<Box sx={{ marginTop: 4 }}>
							<Chart
								options={chartOptions}
								// Using the state for options
								series={[
									{
										name: 'Metrics',
										data: Object.values(chartData.metrics),
									},
								]}
								type='radar'
								height={650}
							/>
						</Box>
					)}
			</MainContainer>
		</AppTheme>
	)
}
