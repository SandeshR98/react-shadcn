import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

// project import

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const isLoggedIn = sessionStorage.getItem('isLoggedIn');

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/dashboard', {
				state: {
					from: '',
				},
				replace: true,
			});
		}
	}, [isLoggedIn, navigate, location]);

	return children;
};

export default GuestGuard;
