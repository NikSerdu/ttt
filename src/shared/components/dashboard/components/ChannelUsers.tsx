import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	FormLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material'
import { FC, useState } from 'react'
import { generateRandomMetrics } from '../../../../utils/generateRandomMetrics'
import { UserMetrics } from '../../../types/userMetrics.type'
import ToBack from '../../ui/ToBack'

const users = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Jane' },
	{ id: 3, name: 'Alex' },
	{ id: 4, name: 'Samantha' },
]

const metricLabels = [
	'Активность',
	'Позитивность',
	'Частота сообщений',
	'Нарушения правил',
	'Токсичность',
	'Любопытство',
	'Отзывчивость',
]

export const ChannelUsers: FC = () => {
	const [chartData, setChartData] = useState<UserMetrics | null>(null)
	const [chartOptions, setChartOptions] = useState({
		chart: { type: 'radar', toolbar: { show: false } },
		xaxis: { categories: metricLabels },
	})
	const [open, setOpen] = useState(false)
	const [searchInput, setSearchInput] = useState('')

	const handleUserClick = (userId: number) => {
		const generatedData = generateRandomMetrics()
		setChartData(generatedData)
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	// Фильтрация пользователей по имени
	const filteredUsers = users.filter(user =>
		user.name.toLowerCase().includes(searchInput.toLowerCase())
	)

	return (
		<Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
			<ToBack />
			<Typography component='h2' variant='h6' sx={{ mb: 2 }}>
				Каналы
			</Typography>

			<FormControl sx={{ display: 'flex', mb: 2 }}>
				<FormLabel htmlFor='userSearch'>Введите имя пользователя:</FormLabel>
				<TextField
					id='userSearch'
					placeholder='Имя пользователя'
					variant='outlined'
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
				/>
			</FormControl>

			<Grid container spacing={2} columns={12}>
				{filteredUsers.map(user => (
					<Grid
						item
						key={user.id}
						lg={2}
						onClick={() => handleUserClick(user.id)}
					>
						<CardActionArea
							sx={{
								maxWidth: 345,
								borderRadius: 2,
							}}
						>
							<Card
								sx={{
									borderRadius: 2,
								}}
							>
								<CardContent>
									<Typography variant='h6'>{user.name}</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
					</Grid>
				))}
			</Grid>

			<Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
				<DialogTitle>Metrics for User</DialogTitle>
				<DialogContent>
					{chartData &&
						chartData.metrics &&
						Object.values(chartData.metrics).length > 0 && (
							<Box sx={{ marginTop: 4 }}>
								<Chart
									options={chartOptions}
									series={[
										{
											name: 'Metrics',
											data: Object.values(chartData.metrics),
										},
									]}
									type='radar'
									height={400}
								/>
							</Box>
						)}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Закрыть
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	)
}
