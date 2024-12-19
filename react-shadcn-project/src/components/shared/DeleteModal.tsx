import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeleteModalProps {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>; // Type definition for the prop
	onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteModal = ({ openModal, setOpenModal, onDelete }: DeleteModalProps) => {
	return (
		<AlertDialog open={openModal}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>This action cannot be undone. This will permanently delete your sample record.</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={() => setOpenModal(false)}>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default DeleteModal;
