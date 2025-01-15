import { AudioWaveform, Command, Frame, GalleryVerticalEnd, SquareTerminal } from 'lucide-react';

export const menuItems = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	teams: [
		{
			name: 'Acme Inc',
			logo: GalleryVerticalEnd,
			plan: 'Enterprise',
		},
		{
			name: 'Acme Corp.',
			logo: AudioWaveform,
			plan: 'Startup',
		},
		{
			name: 'Evil Corp.',
			logo: Command,
			plan: 'Free',
		},
	],
	navMain: [
		{
			title: 'Playground',
			url: '#',
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: 'History',
					url: '#',
				},
				{
					title: 'Starred',
					url: '#',
				},
				{
					title: 'Settings',
					url: '#',
				},
			],
		},
	],
	projects: [
		{
			name: 'Dashboard',
			url: 'dashboard',
			icon: Frame,
		},

		// {
		// 	name: 'Sales & Marketing',
		// 	url: '#',
		// 	icon: PieChart,
		// },
		// {
		// 	name: 'Travel',
		// 	url: '#',
		// 	icon: Map,
		// },
	],
};
