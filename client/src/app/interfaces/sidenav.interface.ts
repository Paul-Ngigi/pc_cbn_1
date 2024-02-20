export interface ISideNav {
  title: string;
  items: ISideNavItems[];
}

export interface ISideNavItems {
  icon: string;
  label: string;
  routeLink: string;
}
