import { createBrowserRouter } from 'react-router';

// PROJECT IMPORT
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([AuthRoutes, MainRoutes]);

export default router;
