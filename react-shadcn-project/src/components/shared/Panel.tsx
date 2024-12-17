import { Button } from '@/components/ui/button';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetPortal,
} from '@/components/ui/sheet';

interface PanelProps {
	openPanel: boolean;
	panelTitle?: string;
	panelDescription?: string;
	children?: React.ReactNode;
	setOpenPanel: React.Dispatch<React.SetStateAction<boolean>>; // Type definition for the prop
}

const Panel = ({
	openPanel,
	panelTitle,
	panelDescription,
	children,
	setOpenPanel,
}: PanelProps) => {
	return (
		<Sheet open={openPanel} onOpenChange={setOpenPanel} modal>
			<SheetPortal>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>{panelTitle}</SheetTitle>
						<SheetDescription>{panelDescription}</SheetDescription>
					</SheetHeader>
					<div className='grid gap-4 py-4'>{children}</div>
					<SheetFooter>
						<Button type='submit'>Save changes</Button>
					</SheetFooter>
				</SheetContent>
			</SheetPortal>
		</Sheet>
	);
};

export default Panel;