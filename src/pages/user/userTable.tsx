import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreVertical } from 'lucide-react';

import { useAppContext } from '../../context/appContext';
import filterIcon from '../../assets/filter.svg';
import { type UserResponse } from '../../model/user';
import Paginator from '../../component/shared/paginator/paginator';
import { formatDateTime } from '../../utils/formatDate';
import { getStatusClass } from '../../utils/getStatus';
import { filterFields } from '../../data/filterConfig';
import UserTableFilter from '../../component/filter/filter';
import UserMenuDropdown from './userMenuDropdown';
import { useUserTableData } from '../../component/hooks/useUserTableData';
import { userDetailsData } from '../../data/userDetails';

interface Column {
  label: string;
  key: string;
}

const columns: Column[] = [
  { label: 'ORGANIZATION', key: 'organisation' },
  { label: 'USERNAME', key: 'user_name' },
  { label: 'EMAIL', key: 'email' },
  { label: 'PHONE NUMBER', key: 'phone_number' },
  { label: 'DATE JOINED', key: 'date_joined' },
  { label: 'STATUS', key: 'status' },
];

interface UserTableProps {
  isInteractive: boolean;
}

const UserTable = ({ isInteractive }: UserTableProps) => {
  const { handleBlacklistUser, handleActivateUser } = useAppContext();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    showFilter,
    filterValues,
    handleClearFilters,
    handleClose,
    handleFilter,
    handleFilterChange,
    toggleFilter,
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    currentUsers,
    setCurrentPage,
    setItemsPerPage,
  } = useUserTableData();

  const handleBlacklistClick = (userId: string) => {
    handleBlacklistUser(userId);
    setOpenMenuId(null);
  };

  const handleActivateClick = (userId: string) => {
    handleActivateUser(userId);
    setOpenMenuId(null);
  };

  const handleViewDetails = (userId: string) => {
    localStorage.setItem('userDetails', JSON.stringify(userDetailsData));
    navigate(`/app/users/${userId}`);
  };

  const handleToggleFilter = () => {
    if (!isInteractive) return;
    toggleFilter();
  };

  const handleMenuClick = (userId: string) => {
    if (!isInteractive) return;
    setOpenMenuId(openMenuId === userId ? null : userId);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong. Please try again later</div>;

  return (
    <div>
      <div className="reset-btn-container">
        <button onClick={handleClose} className="teal-btn reset-btn">
          Reset
        </button>
      </div>

      <div className="user-table-container">
        <table>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} onClick={handleToggleFilter}>
                  <div className="header-filter">
                    <span>{col.label}</span>
                    <img
                      src={filterIcon}
                      alt="filter"
                      className="filter-icon"
                    />
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user: UserResponse) => (
                <tr key={user.id}>
                  {columns.map((col) => {
                    let cellData = user[col.key as keyof UserResponse];

                    if (col.key === 'date_joined') {
                      cellData = formatDateTime(cellData);
                    }

                    if (col.key === 'status') {
                      return (
                        <td key={col.key}>
                          <span className={getStatusClass(user.status)}>
                            {user.status}
                          </span>
                        </td>
                      );
                    }

                    return <td key={col.key}>{cellData}</td>;
                  })}

                  <td className="menu-cell">
                    <button
                      onClick={() => handleMenuClick(user.id)}
                      className="menu-btn"
                    >
                      <MoreVertical size={16} />
                    </button>
                    {openMenuId === user.id && (
                      <UserMenuDropdown
                        user={user}
                        onViewDetails={handleViewDetails}
                        onBlacklist={handleBlacklistClick}
                        onActivate={handleActivateClick}
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="no-data">
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />

        {showFilter && (
          <UserTableFilter
            fields={filterFields}
            filterValues={filterValues}
            onFilterChange={handleFilterChange}
            onFilter={handleFilter}
            onClear={handleClearFilters}
          />
        )}
      </div>
    </div>
  );
};

export default UserTable;
