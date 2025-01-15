import * as React from 'react';

import { NavMain } from '@/containers/sidebar/sidebar-content/NavMain';
import { NavProjects } from '@/containers/sidebar/sidebar-content/NavProjects';
import { NavUser } from '@/containers/sidebar/sidebar-content/NavUser';
import { TeamSwitcher } from '@/containers/sidebar/sidebar-content/TeamSwitcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { menuItems } from '@/containers/menu-items/menu';

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
