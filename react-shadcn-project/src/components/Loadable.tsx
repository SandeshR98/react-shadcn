import { ComponentType, Suspense } from 'react';
import { RoutesProps } from 'react-router'; // Assuming you're using react-router-dom

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable =
	<P extends object>(
		Component: ComponentType<P>
	): ComponentType<P & RoutesProps> =>
	(props: P & RoutesProps) =>
		(
			<Suspense fallback={<div>Loading...</div>}>
				<Component {...props} />
			</Suspense>
		);

export default Loadable;
