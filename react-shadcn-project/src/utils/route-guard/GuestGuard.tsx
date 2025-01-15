import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();
	const isLoggedIn = sessionStorage.getItem('isLoggedIn');

	const handleNavigation = useMemo(() => {
		if (!isLoggedIn) return () => navigate('/login', { replace: true });

		if (isLoggedIn) {
			return () => navigate('/dashboard', { replace: true });
		}
	}, [isLoggedIn, navigate]);

	useEffect(() => {
		if (handleNavigation) handleNavigation();
	}, [handleNavigation]);

	return children;
};

export default GuestGuard;
