import { useState, type ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { AppContext } from './appContext';
import type { IUser, UserResponse } from '../model/user';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  const [userData, setUserData] = useState<IUser | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleBlacklistUser = (userId: string) => {
    queryClient.setQueryData(['users'], (old: UserResponse[] | undefined) =>
      old
        ? old.map((u) =>
            u.id === userId ? { ...u, status: 'Blacklisted' } : u
          )
        : []
    );
  };

  const handleActivateUser = (userId: string) => {
    queryClient.setQueryData(['users'], (old: UserResponse[] | undefined) =>
      old
        ? old.map((u) => (u.id === userId ? { ...u, status: 'Active' } : u))
        : []
    );
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        searchTerm,
        setSearchTerm,

        setUserData,
        searchQuery,
        setSearchQuery,

        handleBlacklistUser,
        handleActivateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
