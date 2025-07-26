import type { IUserDetails } from '../model/user';

export const userDetailsData: IUserDetails = {
  personalInfo: [
    { label: 'Full Name', value: 'Grace Effiom' },
    { label: 'Phone Number', value: '07060780922' },
    { label: 'Email Address', value: 'grace@gmail.com' },
    { label: 'BVN', value: '07060780922' },
    { label: 'Gender', value: 'Female' },
    { label: 'Marital Status', value: 'Single' },
    { label: 'Children', value: 'None' },
    { label: 'Type of Residence', value: "Parent's Apartment" },
  ],
  educationEmployment: [
    { label: 'Level of Education', value: 'B.Sc' },
    { label: 'Employment Status', value: 'Employed' },
    { label: 'Sector of Employment', value: 'FinTech' },
    { label: 'Duration of Employment', value: '2 years' },
    { label: 'Office Email', value: 'grace@lendsqr.com' },
    { label: 'Monthly Income', value: '₦200,000.00 - ₦400,000.00' },
    { label: 'Loan Repayment', value: '40,000' },
  ],
  socials: [
    { label: 'Twitter', value: '@grace_effiom' },
    { label: 'Facebook', value: 'Grace Effiom' },
    { label: 'Instagram', value: '@grace_effiom' },
  ],
};
