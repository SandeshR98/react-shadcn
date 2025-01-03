import { lazy } from 'react';
import { Outlet } from 'react-router';

// PROJECT IMPORT
import Loadable from '@/components/Loadable';
import ErrorBoundary from './ErrorBoundary';
import GuestGuard from '@/utils/route-guard/GuestGuard';

// PAGES
const Login = Loadable(lazy(() => import('@/pages/Login')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
	path: '/',
	errorElement: <ErrorBoundary />,
	children: [
		{
			path: '/',
			element: (
				<GuestGuard>
					<Outlet />
				</GuestGuard>
			),
			children: [
				{
					path: 'login',
					element: <Login />,
				},
			],
		},
	],
};

export default LoginRoutes;
