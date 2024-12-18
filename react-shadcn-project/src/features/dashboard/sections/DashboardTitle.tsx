import { Button } from '@/components/ui/button';
import { OPERATION_MODE } from '@/constants/enums';
interface DashboardTitleProps {
	handleKebab: (mode: number, id: number) => void; // Type definition for the prop
}

const DashboardTitle = ({ handleKebab }: DashboardTitleProps) => {
	return (
		<div className='flex justify-between items-center mb-4'>
			<h1 className='text-2xl font-bold'>Sample List</h1>

			<Button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => handleKebab(OPERATION_MODE.Create, 0)}>
				Add Sample
			</Button>
		</div>
	);
};

export default DashboardTitle;
