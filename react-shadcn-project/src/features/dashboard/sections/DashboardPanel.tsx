import { Dispatch, SetStateAction } from 'react';
import Panel from '@/components/shared/Panel';
import SampleForm from '../forms/SampleForm';

interface DashboardPanelProps {
	openPanel: boolean;
	setOpenPanel: Dispatch<SetStateAction<boolean>>; // Type definition for the prop
}

const DashboardPanel = ({ openPanel, setOpenPanel }: DashboardPanelProps) => {
	return (
		<Panel openPanel={openPanel} setOpenPanel={setOpenPanel}>
			<SampleForm />
		</Panel>
	);
};

export default DashboardPanel;
