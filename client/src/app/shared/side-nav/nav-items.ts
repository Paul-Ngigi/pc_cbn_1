import { ISideNav } from 'src/app/interfaces/sidenav.interface';

export const navItems: ISideNav[] = [
  {
    title: 'Overview',
    items: [
      {
        label: 'Dashboard',
        routeLink: '/dashboard',
        icon: 'assets/svgs/home.svg',
      },
    ],
  },
  {
    title: 'Accounting',
    items: [
      {
        label: 'Add Data',
        routeLink: '/accounting',
        icon: 'assets/svgs/document-add.svg',
      },
      {
        label: 'Data List',
        routeLink: '/accounting/data-list',
        icon: 'assets/svgs/chart-bar.svg',
      },
    ],
  },
  {
    title: 'Analytics',
    items: [
      {
        label: 'Emission Reports',
        routeLink: '/analytics',
        icon: 'assets/svgs/document-report.svg',
      },
      {
        label: 'ESG Report',
        routeLink: '/analytics/esg',
        icon: 'assets/svgs/chart-bar.svg',
      },
    ],
  },
  {
    title: 'Action Plan',
    items: [
      {
        label: 'Net Zero',
        routeLink: '/netzero',
        icon: 'assets/svgs/greenhouse-effect.svg',
      },
      {
        label: 'Offset',
        routeLink: '/offset',
        icon: 'assets/svgs/user-circle.svg',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        label: 'Profile',
        routeLink: null,
        icon: 'assets/svgs/user-group.svg',
      },
      {
        label: 'Users',
        routeLink: null,
        icon: 'assets/svgs/offset.svg',
      },
    ],
  }, 
];
