import { Route, Routes } from 'react-router-dom'
import './App.css'
import { SignIn } from './shared/components/SignIn/SignIn'
import { Dashboard } from './shared/components/dashboard/Dashboard'
import { ChannelPage } from './shared/components/dashboard/components/ChannelPage'
import Channels from './shared/components/dashboard/components/Channels'
import { MainGrid } from './shared/components/dashboard/components/MainGrid'
import { Main } from './shared/components/main/Main'

function App() {
	return (
		<Routes>
			<Route path='/'>
				<Route path='' element={<Main />} />
				<Route path='auth' element={<SignIn />} />
				<Route path='dashboard' element={<Dashboard />}>
					<Route path='main' element={<MainGrid />} />
					<Route path='channels' element={<Channels />} />
					<Route path='channel/:id' element={<ChannelPage />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App
