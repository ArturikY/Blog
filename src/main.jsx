import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import './assets/style.scss'
import { Router } from './components/Router'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<Router />
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
