import { createContext, useContext } from 'react';
import type { IUser } from '../model/user';

interface AppContextType {
  userData: IUser | null;
  setUserData: (user: IUser | null) => void;
  searchQuery: string;

  setSearchQuery: (query: string) => void;
  searchTerm: string;

  setSearchTerm: (searchTerm: string) => void;
  handleBlacklistUser: (userId: string) => void;
  handleActivateUser: (userId: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error('useAppContext must be used within AppProvider');
  return context;
};
