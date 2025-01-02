import { lazy } from 'react';
import { Outlet } from 'react-router';

// PROJECT IMPORT
import Loadable from '@/components/Loadable';
import ErrorBoundary from './ErrorBoundary';

// PAGES
const Login = Loadable(lazy(() => import('@/pages/Login')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
	path: '/',
	errorElement: <ErrorBoundary />,
	children: [
		{
			path: '/',
			element: <Outlet />,
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
