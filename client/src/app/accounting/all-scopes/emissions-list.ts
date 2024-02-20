import { IEmissionCard } from './all-scopes.component';

export const emissionsList: IEmissionCard[] = [
  {
    scope: 'Scope 1',
    title: 'Stationery Combustion',
    description:
      'Record emissions data from stationary sources such as heating, cooling, boilers and power generation',
    url: 'accounting/stationary-combustion',
  },
  {
    scope: 'Scope 1',
    title: 'Fleet Emission',
    description:
      'Track emissions data related to mobile sources, including your vehicles, transportation activities and mobile machines',
    url: 'accounting/fleet-emission',
  },
  {
    scope: 'Scope 1',
    title: 'Processing Emissions',
    description:
      'All direct emissions from the activities of an organisation or under their control. Including fuel consumptions on sites such as gas boilers, fleet vehicles and air conditioning leaks.',
    url: 'accounting/processing-emission',
  },
  {
    scope: 'Scope 1',
    title: 'Fugitive Emissions',
    description:
      'Track emissions arising from unintentional leaks, venting, or other fugitive sources such as your refrigerations.',
    url: null,
  },
  {
    scope: 'Scope 2',
    title: 'Heat and Cooling',
    description:
      "Record emissions related to your company's temperature control systems, including heating and cooling.",
    url: null,
  },
  {
    scope: 'Scope 2',
    title: 'Electricity Consumptions',
    description:
      ' Track emissions from your electricity and energy usage',
    url: null,
  },
  {
    scope: 'Scope 3',
    title: 'Employee Commuting',
    description:
      'Measure emissions from employee transportation to and from work.',
    url: null,
  },
  {
    scope: 'Scope 3',
    title: 'Business Travel',
    description:
      ' Track emissions associated with corporate travel and transportation.',
    url: null,
  },
  {
    scope: 'Scope 3',
    title: 'Purchased Goods and Services',
    description:
      'Estimate emissions from all goods and services procured and purchased by your company.',
    url: null,
  },
];
