import ReactTable from '@/components/ReactTable';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	id: string;
	amount: number;
	status: 'pending' | 'processing' | 'success' | 'failed';
	email: string;
};

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
			<ReactTable columns={columns} data={[]} />
		</div>
	);
};

export default SampleList;
