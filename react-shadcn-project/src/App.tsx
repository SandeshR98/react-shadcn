import './App.css';
import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from '@/routes';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
