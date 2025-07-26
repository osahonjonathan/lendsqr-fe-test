import { useQuery } from '@tanstack/react-query';
import type { UserResponse } from '../../model/user';
import { fetchData } from '../../api/dataApi';
import { useMemo, useState } from 'react';
import { useAppContext } from '../../context/appContext';
import { userData } from '../../data/userDetails';

export const useUserTableData = () => {
  // const {
  //   data: userData = [],
  //   isLoading,
  //   error,
  // } = useQuery<UserResponse[]>({
  //   queryKey: ['users'],
  //   queryFn: fetchData,
  // });
  const { searchQuery, setSearchQuery, setSearchTerm } = useAppContext();
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [filterValues, setFilterValues] = useState<Record<string, string>>({
    organisation: '',
    username: '',
    email: '',
    phoneNumber: '',
    dateJoined: '',
    status: '',
  });

  const [appliedFilters, setAppliedFilters] = useState(filterValues);

  const toggleFilter = () => setShowFilter((prev) => !prev);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilterValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilter = () => {
    setAppliedFilters(filterValues);
    setCurrentPage(1);
    setShowFilter(false);
  };

  const handleClearFilters = () => {
    const cleared = {
      organisation: '',
      username: '',
      email: '',
      phoneNumber: '',
      dateJoined: '',
      status: '',
    };
    setFilterValues(cleared);
    setAppliedFilters(cleared);
    setCurrentPage(1);
  };

  const handleClose = () => {
    setSearchTerm('');
    setSearchQuery('');
    handleClearFilters();
    setShowFilter(false);
  };

  const filteredUsers = useMemo(() => {
    return userData
      .filter((user: UserResponse) =>
        Object.keys(appliedFilters).every((key) => {
          const filterValue = appliedFilters[key]?.toLowerCase();
          if (!filterValue) return true;
          const userValue =
            user[key as keyof UserResponse]?.toString().toLowerCase() ?? '';
          return userValue.includes(filterValue);
        })
      )
      .filter((user: UserResponse) =>
        Object.values(user)
          .join(' ')
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
  }, [userData, appliedFilters, searchQuery]);

  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  return {
    userData,

    showFilter,
    filteredUsers,
    handleClearFilters,
    handleClose,
    handleFilter,
    handleFilterChange,
    toggleFilter,
    filterValues,
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    currentUsers,
    setCurrentPage,
    setItemsPerPage,
  };
};
