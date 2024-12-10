import {
	Card,
	CardActionArea,
	CardContent,
	Typography as CardTypography,
} from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { channelsData } from '../../../data/channels'

export const Channels: FC = () => {
	return (
		<Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
			<Typography component='h2' variant='h6' sx={{ mb: 2 }}>
				Каналы
			</Typography>

			<Grid container spacing={2} columns={12}>
				{channelsData.map(channel => (
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
