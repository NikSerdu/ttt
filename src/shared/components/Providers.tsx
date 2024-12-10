import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

const Providers: FC<PropsWithChildren> = ({children}) => {
	return <BrowserRouter>
	<QueryClientProvider client={queryClient}>

{children}
</QueryClientProvider></BrowserRouter>
}

export default Providers