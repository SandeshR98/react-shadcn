export function AppFooter() {
	return (
		<footer className='sticky bottom-0 flex shrink-0 items-center justify-between border-t bg-background p-4'>
			{/* Left side of the footer */}
			<div className='flex items-center gap-2 px-4'>
				<div className='text-sm text-muted-foreground'>© 2025 Your Company Name. All rights reserved.</div>
			</div>

			{/* Right side of the footer */}
			<div className='flex items-center gap-4'>
				<a href='/privacy-policy' className='text-sm hover:underline'>
					Privacy Policy
				</a>
				<a href='/terms-of-service' className='text-sm hover:underline'>
					Terms of Service
				</a>
			</div>
		</footer>
	);
}
