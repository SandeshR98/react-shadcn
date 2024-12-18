import { Dispatch, SetStateAction } from 'react';
import Panel from '@/components/shared/Panel';
import SampleForm from '../forms/SampleForm';
import { Sample } from '@/interfaces';

interface DashboardPanelProps {
	mode: number;
	openPanel: boolean;
	panelFooter?: boolean;
	setOpenPanel: Dispatch<SetStateAction<boolean>>; // Type definition for the prop
	sampleInfo: Sample;
	setSampleInfo: React.Dispatch<React.SetStateAction<Sample>>;
	handleSave: React.MouseEventHandler<HTMLButtonElement>;
}

const DashboardPanel = ({ mode, openPanel, setOpenPanel, panelFooter, sampleInfo, setSampleInfo, handleSave }: DashboardPanelProps) => {
	return (
		<Panel openPanel={openPanel} setOpenPanel={setOpenPanel} panelFooter={panelFooter} onClick={handleSave}>
			<SampleForm sampleInfo={sampleInfo} setSampleInfo={setSampleInfo} mode={mode} />
		</Panel>
	);
};

export default DashboardPanel;
