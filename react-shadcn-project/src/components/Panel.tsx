import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
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
	children?: ReactNode;
	setOpenPanel: Dispatch<SetStateAction<boolean>>; // Type definition for the prop
}

const Panel: FC<PanelProps> = ({
	openPanel,
	panelTitle,
	panelDescription,
	children,
	setOpenPanel,
}) => {
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
