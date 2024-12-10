import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { FC } from 'react'
import ToBack from '../../ui/ToBack'

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

export const ChannelMessages: FC = () => {
	return (
		<Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
			<ToBack />
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
		</Box>
	)
}
