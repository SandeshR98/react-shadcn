import { useState } from 'react';
import SampleList from '@/features/dashboard/lists/SampleList';
import DashboardTitle from '@/features/dashboard/sections/DashboardTitle';
import DashboardPanel from '@/features/dashboard/sections/DashboardPanel';

const Dashboard = () => {
	const [openPanel, setOpenPanel] = useState<boolean>(false);

	return (
		<div className='container mx-auto py-10'>
			<DashboardTitle setOpenPanel={setOpenPanel} />
			<SampleList />
			<DashboardPanel openPanel={openPanel} setOpenPanel={setOpenPanel} />
		</div>
	);
};

export default Dashboard;
