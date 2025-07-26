export type UserStatus = 'Active' | 'Pending' | 'Blacklisted' | 'Inactive';

export interface UserResponse {
  id: string;
  organisation: string;
  user_name: string;
  email: string;
  date_joined: string;
  phone_number: string;
  dateJoined: string;
  status: UserStatus;
}

export interface IUser {
  email: string;
  name: string;
  password?: string;
}

export interface ApiResponse {
  user: UserResponse[];
}


type UserDetailItem = {
  label: string;
  value: string;
};


export type IUserDetails = {
  personalInfo: UserDetailItem[];
  educationEmployment: UserDetailItem[];
  socials: UserDetailItem[];
};







