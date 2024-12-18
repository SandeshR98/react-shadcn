import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetPortal } from '@/components/ui/sheet';

interface PanelProps {
	openPanel: boolean;
	panelTitle?: string;
	panelDescription?: string;
	children?: React.ReactNode;
	panelFooter?: boolean;
	setOpenPanel: React.Dispatch<React.SetStateAction<boolean>>; // Type definition for the prop
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Panel = ({ openPanel, panelTitle, panelDescription, children, panelFooter, setOpenPanel, onClick }: PanelProps) => {
	return (
		<Sheet open={openPanel} onOpenChange={setOpenPanel} modal>
			<SheetPortal>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>{panelTitle}</SheetTitle>
						<SheetDescription>{panelDescription}</SheetDescription>
					</SheetHeader>
					<div className='grid gap-4 py-4'>{children}</div>

					{panelFooter && (
						<SheetFooter>
							<Button onClick={onClick}>Save</Button>
						</SheetFooter>
					)}
				</SheetContent>
			</SheetPortal>
		</Sheet>
	);
};

export default Panel;
