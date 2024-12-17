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
	return <ReactTable columns={columns} data={[]} />;
};

export default SampleList;
