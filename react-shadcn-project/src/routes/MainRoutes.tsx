import { lazy } from 'react';

// PROJECT IMPORT
import Loadable from '@/components/Loadable';
import MainLayout from '@/layout';
import ErrorBoundary from './ErrorBoundary';
import AuthGuard from '@/utils/route-guard/AuthGuard';

// PAGES
const Dashboard = Loadable(lazy(() => import('@/pages/Dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: '/',
	errorElement: <ErrorBoundary />,
	children: [
		{
			path: '/',
			element: (
				<AuthGuard>
					<MainLayout />
				</AuthGuard>
			),
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
