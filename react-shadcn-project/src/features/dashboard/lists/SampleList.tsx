import ReactTable from '@/components/ReactTable';
import { Payment } from '@/interfaces';
import { ColumnDef } from '@tanstack/react-table';

const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'mobile',
		header: 'Mobile',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
];

const SampleList = () => {
	return (
		<div className='container mx-auto py-10'>
			<div className='flex justify-between items-center mb-4'>
				<h1 className='text-3xl font-bold'>Sample List</h1>
			</div>

			<ReactTable columns={columns} data={[]} />
		</div>
	);
};

export default SampleList;
