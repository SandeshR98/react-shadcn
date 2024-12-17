import { useState } from 'react';
import DashboardTitle from '../sections/DashboardTitle';
import SampleList from '../lists/SampleList';
import Panel from '@/components/shared/Panel';
import SampleForm from '../forms/SampleForm';

const Dashboard = () => {
	const [openPanel, setOpenPanel] = useState<boolean>(false);

	return (
		<div className='container mx-auto py-10'>
			<DashboardTitle setOpenPanel={setOpenPanel} />

			<SampleList />

			<Panel openPanel={openPanel} setOpenPanel={setOpenPanel}>
				<SampleForm />
			</Panel>
		</div>
	);
};

export default Dashboard;
