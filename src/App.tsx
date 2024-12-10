import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './shared/components/Main/Main'
import { SignIn } from './shared/components/SignIn/SignIn'
import { Dashboard } from './shared/components/dashboard/Dashboard'
import { ChannelMessages } from './shared/components/dashboard/components/ChannelMessages'
import { ChannelPage } from './shared/components/dashboard/components/ChannelPage'
import { ChannelUsers } from './shared/components/dashboard/components/ChannelUsers'
import { Channels } from './shared/components/dashboard/components/Channels'

function App() {
	return (
		<Routes>
			<Route path='/'>
				<Route path='' element={<Main />} />
				<Route path='auth' element={<SignIn />} />
				<Route path='dashboard' element={<Dashboard />}>
					<Route path='main' element={<Channels />} />
					<Route path='channel/:channelId' element={<ChannelPage />} />
					<Route path='channel/:channelId/users' element={<ChannelUsers />} />
					<Route
						path='channel/:channelId/messages'
						element={<ChannelMessages />}
					/>
				</Route>
			</Route>
		</Routes>
	)
}

export default App
