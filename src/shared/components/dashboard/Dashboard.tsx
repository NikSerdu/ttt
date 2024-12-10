import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'
import type {} from '@mui/x-charts/themeAugmentation'
import type {} from '@mui/x-data-grid/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-tree-view/themeAugmentation'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import AppTheme from '../../theme/shared-theme/AppTheme'

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import {
	chartsCustomizations,
	dataGridCustomizations,
} from './theme/customizations'
const xThemeComponents = {
	...chartsCustomizations,
	...dataGridCustomizations,
}

export const Dashboard: FC = (props: { disableCustomTheme?: boolean }) => {
	return (
		<AppTheme {...props} themeComponents={xThemeComponents}>
			<CssBaseline enableColorScheme />
			<Box sx={{ display: 'flex' }}>
				<SideMenu />

				<Box
					component='main'
					sx={theme => ({
						flexGrow: 1,
						backgroundColor: theme.vars
							? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
							: alpha(theme.palette.background.default, 1),
						overflow: 'auto',
					})}
				>
					<Stack
						spacing={2}
						sx={{
							alignItems: 'center',
							mx: 3,
							pb: 5,
							mt: { xs: 8, md: 0 },
						}}
					>
						<Header />
						<Outlet />
					</Stack>
				</Box>
			</Box>
		</AppTheme>
	)
}
