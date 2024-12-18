import ReactTable from '@/components/shared/ReactTable';
import { Sample } from '@/interfaces';
import SampleService from '@/services/SampleService';
import { ColumnDef } from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';

const columns: ColumnDef<Sample>[] = [
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
	const { data: { Samples = [] } = {} } = useQuery({
		queryKey: ['samples'],
		queryFn: () => SampleService.getSamples(),
		refetchOnWindowFocus: false,
	});

	return <ReactTable columns={columns} data={Samples} />;
};

export default SampleList;
