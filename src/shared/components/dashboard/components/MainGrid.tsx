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

// Example data
export const channelsData = [
	{ channelId: 1, title: 'Tech News' },
	{ channelId: 2, title: 'Daily Coding Tips' },
	{ channelId: 3, title: 'JavaScript Tutorials' },
	{ channelId: 4, title: 'Web Development' },
	{ channelId: 5, title: 'Frontend Focus' },
	{ channelId: 6, title: 'React Community' },
	{ channelId: 7, title: 'TypeScript Weekly' },
	{ channelId: 8, title: 'Design Systems' },
	{ channelId: 9, title: 'DevOps Digest' },
	{ channelId: 10, title: 'AI and Machine Learning' },
]

export const MainGrid: FC = () => {
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
