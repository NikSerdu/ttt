import {
	Card,
	CardActionArea,
	CardContent,
	Typography as CardTypography,
	FormControl,
	FormLabel,
	TextField,
} from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { channelsData } from '../../../data/channels'

export const Channels: FC = () => {
	const { control, watch } = useForm({
		defaultValues: { searchInput: '' },
	})

	const searchInput = watch('searchInput')

	const filteredChannels = channelsData.filter(channel =>
		channel.title.toLowerCase().includes(searchInput.toLowerCase())
	)

	return (
		<Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
			<Typography component='h2' variant='h6' sx={{ mb: 2 }}>
				Каналы
			</Typography>
			<FormControl sx={{ display: 'flex' }}>
				<FormLabel htmlFor='tgNik'>Введите название канала:</FormLabel>
				<Controller
					name='searchInput'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							id='searchInput'
							type='text'
							placeholder='Название канала'
							autoFocus
							variant='outlined'
						/>
					)}
				/>
			</FormControl>
			<Grid container spacing={2} columns={12} mt={6}>
				{filteredChannels.map(channel => (
					<Link
						to={`/dashboard/channel/${channel.channelId}`}
						key={channel.channelId}
					>
						<Grid item xs={12} sm={6} md={4} lg={3}>
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
										<CardTypography variant='h6'>
											{channel.title}
										</CardTypography>
									</CardContent>
								</Card>
							</CardActionArea>
						</Grid>
					</Link>
				))}
			</Grid>
		</Box>
	)
}
