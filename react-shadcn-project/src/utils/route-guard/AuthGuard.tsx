import { useEffect } from 'react';

// ==============================|| AUTH GUARD ||============================== //

import { useLocation, useNavigate } from 'react-router';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	const isLoggedIn = sessionStorage.getItem('isLoggedIn');
	const navigate = useNavigate();
	const location = useLocation();

	console.log(isLoggedIn);

	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/login', {
				state: {
					from: location.pathname,
				},
				replace: true,
			});
		}
	}, [navigate, location, isLoggedIn]);

	return children;
};

export default AuthGuard;
