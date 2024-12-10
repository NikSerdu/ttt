import { Box, Typography } from '@mui/material'
import { FC } from 'react'
const Channels: FC = () => {
	return (
		<Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
			<Typography component='h2' variant='h6' sx={{ mb: 2 }}>
				Каналы
			</Typography>
		</Box>
	)
}

export default Channels
