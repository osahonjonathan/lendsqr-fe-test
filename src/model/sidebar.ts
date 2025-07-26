export interface StandaloneSidebarItem {
  iconSrc: string;
  label: string;
  path: string;
  standalone: true;
}

export interface GroupedSidebarItem {
  group: string;

  items: {
    iconSrc: string;
    label: string;
    path: string;
  }[];
}

export type SidebarItem = StandaloneSidebarItem | GroupedSidebarItem;
