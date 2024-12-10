import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { mainListItems } from '../../../data/menu'
import { useMenuStore } from '../../../store/MenuStore'

export const MenuContent: FC = () => {
	const { activeMenuId, setActiveMenuId } = useMenuStore()
	return (
		<Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
			<List dense>
				{mainListItems.map((item, index) => (
					<Link key={index} to={item.href}>
						<ListItem disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								selected={index === activeMenuId}
								onClick={() => setActiveMenuId(index)}
							>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</Stack>
	)
}
