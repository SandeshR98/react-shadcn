import { lazy } from 'react';

// PROJECT IMPORT
import Loadable from '@/components/Loadable';
import MainLayout from '@/layout';
import ErrorBoundary from './ErrorBoundary';

// PAGES
const Dashboard = Loadable(lazy(() => import('@/pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: '/',
	errorElement: <ErrorBoundary />,
	children: [
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					path: 'dashboard',
					element: <Dashboard />,
				},
			],
		},
	],
};

export default MainRoutes;
