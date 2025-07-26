import UsersIcon from '../assets/users.svg';
import SackIcon from '../assets/sack.svg';
import HomeIcon from '../assets/home.svg';
import BriefCaseIcon from '../assets/briefcase.svg';
import LoanRequestIcon from '../assets/Group 104.svg';
import HandShakeIcon from '../assets/handshake-regular.svg';
import PiggyBankIcon from '../assets/piggy-bank.svg';
import UserCheckIcon from '../assets/user-check.svg';
import UserCrossIcon from '../assets/user-times.svg';
import SavingProductIcon from '../assets/np_bank.svg';
import CoinsIcon from '../assets/coins-solid.svg';
import TransactionIcon from '../assets/icon.svg';
import ServiceIcon from '../assets/galaxy.svg';
import ServiceAccountIcon from '../assets/user-cog.svg';
import ScrollIcon from '../assets/scroll.svg';
import ReportIcon from '../assets/chart-bar.svg';
import SliderIcon from '../assets/sliders-h.svg';
import BadgeIcon from '../assets/badge-percent.svg';
import ClipBoardIcon from '../assets/clipboard-list.svg';
import type { SidebarItem } from '../model/sidebar';

export const sidebarItems: SidebarItem[] = [
  {
    iconSrc: BriefCaseIcon,
    label: 'Switch Organization',
    standalone: true,
    path: '/app/switch',
  },
  {
    iconSrc: HomeIcon,
    label: 'Dashboard',
    standalone: true,
    path: '/app/dashboard',
  },

  {
    group: 'Customers',
    items: [
      { iconSrc: UsersIcon, label: 'Users', path: '/app/users' },
      { iconSrc: UsersIcon, label: 'Guarantors', path: '/app/guarantors' },
      { iconSrc: SackIcon, label: 'Loans', path: '/app/loans' },
      {
        iconSrc: HandShakeIcon,
        label: 'Decision Models',
        path: '/app/decision-models',
      },
      { iconSrc: PiggyBankIcon, label: 'Savings', path: '/app/savings' },
      {
        iconSrc: LoanRequestIcon,
        label: 'Loan Requests',
        path: '/app/loan-requests',
      },
      { iconSrc: UserCheckIcon, label: 'Whitelist', path: '/app/whitelist' },
      { iconSrc: UserCrossIcon, label: 'Karma', path: '/app/karma' },
    ],
  },

  {
    group: 'Businesses',
    items: [
      {
        iconSrc: BriefCaseIcon,
        label: 'Organizations',
        path: '/app/organizations',
      },
      {
        iconSrc: LoanRequestIcon,
        label: 'Loan Products',
        path: '/app/loan-products',
      },
      {
        iconSrc: SavingProductIcon,
        label: 'Savings Products',
        path: '/app/savings-products',
      },
      { iconSrc: CoinsIcon, label: 'Fees and Charges', path: '/app/fees' },
      {
        iconSrc: TransactionIcon,
        label: 'Transactions',
        path: '/app/transactions',
      },
      { iconSrc: ServiceIcon, label: 'Services', path: '/app/services' },
      {
        iconSrc: ServiceAccountIcon,
        label: 'Service Account',
        path: '/app/service-account',
      },
      { iconSrc: ScrollIcon, label: 'Settlements', path: '/app/settlements' },
      { iconSrc: ReportIcon, label: 'Reports', path: '/app/reports' },
    ],
  },

  {
    group: 'Settings',
    items: [
      { iconSrc: SliderIcon, label: 'Preferences', path: '/app/preferences' },
      {
        iconSrc: BadgeIcon,
        label: 'Fees and Pricing',
        path: '/app/fees-pricing',
      },
      { iconSrc: ClipBoardIcon, label: 'Audit Logs', path: '/app/audit-logs' },
    ],
  },
];
