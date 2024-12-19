import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { menuItems } from '@/containers/menu-items/menu';

// This is sample menuItems.
// const data = {
// 	user: {
// 		name: 'shadcn',
// 		email: 'm@example.com',
// 		avatar: '/avatars/shadcn.jpg',
// 	},
// 	teams: [
// 		{
// 			name: 'Acme Inc',
// 			logo: GalleryVerticalEnd,
// 			plan: 'Enterprise',
// 		},
// 		{
// 			name: 'Acme Corp.',
// 			logo: AudioWaveform,
// 			plan: 'Startup',
// 		},
// 		{
// 			name: 'Evil Corp.',
// 			logo: Command,
// 			plan: 'Free',
// 		},
// 	],
// 	navMain: [
// 		{
// 			title: 'Playground',
// 			url: '#',
// 			icon: SquareTerminal,
// 			isActive: true,
// 			items: [
// 				{
// 					title: 'History',
// 					url: '#',
// 				},
// 				{
// 					title: 'Starred',
// 					url: '#',
// 				},
// 				{
// 					title: 'Settings',
// 					url: '#',
// 				},
// 			],
// 		},
// 		{
// 			title: 'Models',
// 			url: '#',
// 			icon: Bot,
// 			items: [
// 				{
// 					title: 'Genesis',
// 					url: '#',
// 				},
// 				{
// 					title: 'Explorer',
// 					url: '#',
// 				},
// 				{
// 					title: 'Quantum',
// 					url: '#',
// 				},
// 			],
// 		},
// 		{
// 			title: 'Documentation',
// 			url: '#',
// 			icon: BookOpen,
// 			items: [
// 				{
// 					title: 'Introduction',
// 					url: '#',
// 				},
// 				{
// 					title: 'Get Started',
// 					url: '#',
// 				},
// 				{
// 					title: 'Tutorials',
// 					url: '#',
// 				},
// 				{
// 					title: 'Changelog',
// 					url: '#',
// 				},
// 			],
// 		},
// 		{
// 			title: 'Settings',
// 			url: '#',
// 			icon: Settings2,
// 			items: [
// 				{
// 					title: 'General',
// 					url: '#',
// 				},
// 				{
// 					title: 'Team',
// 					url: '#',
// 				},
// 				{
// 					title: 'Billing',
// 					url: '#',
// 				},
// 				{
// 					title: 'Limits',
// 					url: '#',
// 				},
// 			],
// 		},
// 	],
// 	projects: [
// 		{
// 			name: 'Dashboard',
// 			url: 'dashboard',
// 			icon: Frame,
// 		},
// 		// {
// 		// 	name: 'Sales & Marketing',
// 		// 	url: '#',
// 		// 	icon: PieChart,
// 		// },
// 		// {
// 		// 	name: 'Travel',
// 		// 	url: '#',
// 		// 	icon: Map,
// 		// },
// 	],
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={menuItems.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavProjects projects={menuItems.projects} />
				<NavMain items={menuItems.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={menuItems.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
