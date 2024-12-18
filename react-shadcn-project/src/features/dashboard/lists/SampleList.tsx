import ReactTable from '@/components/shared/ReactTable';
import { Sample } from '@/interfaces';
import SampleService from '@/services/SampleService';
import { ColumnDef } from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OPERATION_MODE } from '@/constants/enums';

interface SampleListProps {
	handleKebab: (mode: number, id: number) => void;
}

const getColumns = (handleKebab: (mode: number, id: number) => void): ColumnDef<Sample>[] => [
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const sampleItem = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<EllipsisVertical />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='center'>
						<DropdownMenuItem onClick={() => handleKebab(OPERATION_MODE.View, sampleItem.id!)}>View</DropdownMenuItem>
						<DropdownMenuItem onClick={() => handleKebab(OPERATION_MODE.Edit, sampleItem.id!)}>Edit</DropdownMenuItem>
						<DropdownMenuItem onClick={() => handleKebab(OPERATION_MODE.Delete, sampleItem.id!)}>Delete</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
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

const SampleList = ({ handleKebab }: SampleListProps) => {
	const { data: { samples = [] } = {} } = useQuery({
		queryKey: ['samples'],
		queryFn: () => SampleService.getSamples(),
		refetchOnWindowFocus: false,
	});

	const columns = getColumns(handleKebab);

	return <ReactTable columns={columns} data={samples} />;
};

export default SampleList;
