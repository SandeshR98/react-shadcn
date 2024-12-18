import { Dispatch, SetStateAction } from 'react';
import Panel from '@/components/shared/Panel';
import SampleForm from '../forms/SampleForm';
import { Sample } from '@/interfaces';

interface DashboardPanelProps {
	openPanel: boolean;
	setOpenPanel: Dispatch<SetStateAction<boolean>>; // Type definition for the prop
	sampleInfo: Sample;
	setSampleInfo: React.Dispatch<React.SetStateAction<Sample>>;
	handleSave: React.MouseEventHandler<HTMLButtonElement>;
}

const DashboardPanel = ({ openPanel, setOpenPanel, sampleInfo, setSampleInfo, handleSave }: DashboardPanelProps) => {
	return (
		<Panel openPanel={openPanel} setOpenPanel={setOpenPanel} onClick={handleSave}>
			<SampleForm sampleInfo={sampleInfo} setSampleInfo={setSampleInfo} />
		</Panel>
	);
};

export default DashboardPanel;
