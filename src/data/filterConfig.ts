import type { FieldConfig } from '../component/filter/filter';

export const filterFields: FieldConfig[] = [
  {
    name: 'organisation',
    label: 'Organisation',
    type: 'select',
    options: ['', 'Lendsqr', 'Irorun', 'Payday'],
  },
  { name: 'username', label: 'Username', type: 'text' },
  { name: 'email', label: 'Email', type: 'text' },
  { name: 'phoneNumber', label: 'Phone Number', type: 'text' },
  { name: 'dateJoined', label: 'Date Joined', type: 'date' },
  {
    name: 'status',
    label: 'Status',
    type: 'select',
    options: ['', 'Active', 'Inactive', 'Pending', 'Blacklisted'],
  },
];
