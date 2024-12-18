import { useState } from 'react';
import SampleList from '@/features/dashboard/lists/SampleList';
import DashboardTitle from '@/features/dashboard/sections/DashboardTitle';
import DashboardPanel from '@/features/dashboard/sections/DashboardPanel';
import { Sample } from '@/interfaces';
import SampleService from '@/services/SampleService';
import { useQueryClient } from '@tanstack/react-query';
import { setAlertSuccess } from '@/components/shared/Alert';

const Dashboard = () => {
	const queryClient = useQueryClient();

	const [openPanel, setOpenPanel] = useState<boolean>(false);
	const [sampleInfo, setSampleInfo] = useState<Sample>({ id: 0, name: '', mobile: '', email: '' });

	const handleSave = async () => {
		const { name, mobile, email } = sampleInfo;
		const { isSuccess } = await SampleService.createSample({ name, mobile, email });

		queryClient.invalidateQueries({ queryKey: ['samples'] });
		setAlertSuccess('Successfully saved!');
		setSampleInfo({ name: '', mobile: '', email: '' });
		setOpenPanel(false);
	};

	return (
		<div className='container mx-auto py-10'>
			<DashboardTitle setOpenPanel={setOpenPanel} />
			<SampleList />
			<DashboardPanel openPanel={openPanel} setOpenPanel={setOpenPanel} sampleInfo={sampleInfo} setSampleInfo={setSampleInfo} handleSave={handleSave} />
		</div>
	);
};

export default Dashboard;
