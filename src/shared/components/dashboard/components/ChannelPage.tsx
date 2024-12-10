import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { FC, useState } from 'react'
import Chart from 'react-apexcharts'
import { generateRandomMetrics } from '../../../../utils/generateRandomMetrics'
import { UserMetrics } from '../../../types/userMetrics.type'

const generateRandomMessages = () => {
	const messageTypes = ['positive', 'vulgar', 'question']
	const authors = ['John', 'Jane', 'Alex', 'Samantha']

	return Array.from({ length: 20 }, (_, idx) => ({
		id: idx + 1,
		text: `Message text ${idx + 1}`,
		author: authors[Math.floor(Math.random() * authors.length)],
		timestamp: new Date().toISOString(),
		type: messageTypes[Math.floor(Math.random() * messageTypes.length)],
	}))
}

const rows = generateRandomMessages()

const columns: GridColDef[] = [
	{ field: 'text', headerName: 'Сообщение', width: 350 },
	{ field: 'author', headerName: 'Автор', width: 150 },
	{ field: 'timestamp', headerName: 'Время отправления', width: 180 },
	{ field: 'type', headerName: 'Тип сообщения', width: 180 },
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

const users = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Jane' },
	{ id: 3, name: 'Alex' },
	{ id: 4, name: 'Samantha' },
]

export const ChannelPage: FC = () => {
	const [chartData, setChartData] = useState<UserMetrics | null>(null)
	const [chartOptions, setChartOptions] = useState({
		chart: { type: 'radar', toolbar: { show: false } },
		xaxis: { categories: metricLabels },
	})
	const [open, setOpen] = useState(false) // State to control dialog visibility

	const handleUserClick = (userId: number) => {
		// Generate random data for the user (you can replace this with actual user data)
		const generatedData = generateRandomMetrics()
		setChartData(generatedData)
		setOpen(true) // Open the dialog
	}

	const handleClose = () => {
		setOpen(false) // Close the dialog
	}

	return (
		<Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
			<Typography component='h2' variant='h6' sx={{ mb: 2 }}>
				Каналы
			</Typography>

			<List>
				{users.map(user => (
					<ListItem
						button
						key={user.id}
						onClick={() => handleUserClick(user.id)}
					>
						<ListItemText primary={user.name} />
					</ListItem>
				))}
			</List>
			<DataGrid
				autoHeight
				checkboxSelection
				rows={rows}
				columns={columns}
				getRowClassName={params =>
					params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
				}
				initialState={{
					pagination: { paginationModel: { pageSize: 20 } },
				}}
				pageSizeOptions={[10, 20, 50]}
				disableColumnResize
				density='compact'
			/>

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
