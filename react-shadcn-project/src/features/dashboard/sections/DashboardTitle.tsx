import { Button } from '@/components/ui/button';
import { Dispatch, SetStateAction } from 'react';
interface DashboardTitleProps {
	setOpenPanel: Dispatch<SetStateAction<boolean>>; // Type definition for the prop
}

const DashboardTitle = ({ setOpenPanel }: DashboardTitleProps) => {
	return (
		<div className='flex justify-between items-center mb-4'>
			<h1 className='text-2xl font-bold'>Sample List</h1>

			<Button
				className='bg-blue-500 text-white px-4 py-2 rounded-md'
				onClick={() => setOpenPanel(true)}
			>
				Add Sample
			</Button>
		</div>
	);
};

export default DashboardTitle;
