import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	const isLoggedIn = sessionStorage.getItem('isLoggedIn');
	const navigate = useNavigate();
	const location = useLocation();

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
