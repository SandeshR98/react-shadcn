import { useState } from 'react';
import SampleList from '@/features/dashboard/lists/SampleList';
import DashboardTitle from '@/features/dashboard/sections/DashboardTitle';
import DashboardPanel from '@/features/dashboard/sections/DashboardPanel';
import { Sample } from '@/interfaces';
import SampleService from '@/services/SampleService';
import { useQueryClient } from '@tanstack/react-query';
import { setAlertError, setAlertSuccess } from '@/components/shared/Alert';
import { useQuery } from '@tanstack/react-query';
import { OPERATION_MODE } from '@/constants/enums';

const Dashboard = () => {
	const queryClient = useQueryClient();
	const [openPanel, setOpenPanel] = useState<boolean>(false);
	const [sampleInfo, setSampleInfo] = useState<Sample>({ id: 0, name: '', mobile: '', email: '' });
	const [selectedSample, setSelectedSample] = useState<{ mode: number; id: number }>({ mode: OPERATION_MODE.Create, id: 0 });

	useQuery({
		queryKey: ['sample', selectedSample.mode, selectedSample.id],
		queryFn: () => getSampleById(),
		refetchOnWindowFocus: false,
		enabled: selectedSample.id && selectedSample.mode !== OPERATION_MODE.Delete ? true : false,
	});

	const getSampleById = async () => {
		if (selectedSample.mode === OPERATION_MODE.View || selectedSample.mode === OPERATION_MODE.Edit) {
			const { sample } = await SampleService.getSample(selectedSample.id);

			setSampleInfo({ ...sampleInfo, ...sample });
			return sample;
		}
	};

	const handleKebab = (mode: number, id: number) => {
		if (mode === OPERATION_MODE.Create) {
			setSampleInfo({ name: '', mobile: '', email: '' });
		}

		if (mode === OPERATION_MODE.Delete) {
			// DELETE LOGIC
		}

		setSelectedSample({ mode, id });
		setOpenPanel(true);
	};

	const handleSave = async () => {
		const { name, mobile, email } = sampleInfo;
		const { isSuccess } = await SampleService.createSample({ name, mobile, email });

		if (isSuccess) {
			queryClient.invalidateQueries({ queryKey: ['samples'] });
			setAlertSuccess('Successfully saved!');
			setSampleInfo({ name: '', mobile: '', email: '' });
			setOpenPanel(false);
		}

		if (!isSuccess) {
			setAlertError('Error occurred!');
		}
	};

	return (
		<div className='container mx-auto py-10'>
			<DashboardTitle handleKebab={handleKebab} />
			<SampleList handleKebab={handleKebab} />
			<DashboardPanel
				openPanel={openPanel}
				setOpenPanel={setOpenPanel}
				mode={selectedSample.mode}
				panelFooter={selectedSample.mode === OPERATION_MODE.Create || selectedSample.mode === OPERATION_MODE.Edit}
				sampleInfo={sampleInfo}
				setSampleInfo={setSampleInfo}
				handleSave={handleSave}
			/>
		</div>
	);
};

export default Dashboard;
