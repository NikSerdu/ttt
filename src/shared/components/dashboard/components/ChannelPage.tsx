import {
	Card,
	CardActionArea,
	CardContent,
	Typography as CardTypography,
	Typography,
} from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { channelsData } from '../../../data/channels'
import ToBack from '../../ui/ToBack'

export const ChannelPage: FC = () => {
	const { channelId } = useParams()
	if (!channelId) return null
	return (
		<Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
			<ToBack />
			{channelId && (
				<Typography component='h2' variant='h6' sx={{ mb: 2 }}>
					{channelsData[+channelId - 1].title}
				</Typography>
			)}
			<Grid container spacing={2} columns={12}>
				<Link to={`/dashboard/channel/${channelId}/users`}>
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
									<CardTypography variant='h6'>Участники канала</CardTypography>
								</CardContent>
							</Card>
						</CardActionArea>
					</Grid>
				</Link>
				<Link to={`/dashboard/channel/${channelId}/messages`}>
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
									<CardTypography variant='h6'>Сообщения</CardTypography>
								</CardContent>
							</Card>
						</CardActionArea>
					</Grid>
				</Link>
			</Grid>
		</Box>
	)
}
