import { useState } from 'react';
import { Filter } from 'lucide-react';
import { useAppContext } from '../../context/appContext';

import { MoreVertical } from 'lucide-react';
import filterIcon from '../../assets/filter.svg';

import { type UserResponse } from '../../model/user';
import Paginator from '../../component/shared/paginator/paginator';
import { formatDateTime } from '../../utils/formatDate';
import { getStatusClass } from '../../utils/getStatus';
import { filterFields } from '../../data/filterConfig';
import UserTableFilter from '../../component/filter/filter';
import UserMenuDropdown from './userMenuDropdown';
import { useUserTableData } from '../../component/hooks/useUserTableData';
import { useNavigate } from 'react-router-dom';
import { userDetailsData } from '../../data/userDetails';

const UserTable = () => {
  const { handleBlacklistUser, handleActivateUser } = useAppContext();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
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

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Something went wrong. Please try again later</div>;

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
              <th onClick={toggleFilter}>
                <div className="header-filter">
                  <span>ORGANIZATION</span>
                  <img src={filterIcon} alt="filter" className="filter-icon" />
                </div>
              </th>
              <th onClick={toggleFilter}>
                <div className="header-filter">
                  <span>USERNAME</span>
                  <img src={filterIcon} alt="filter" className="filter-icon" />
                </div>
              </th>
              <th onClick={toggleFilter}>
                <div className="header-filter">
                  <span>EMAIL</span>
                  <img src={filterIcon} alt="filter" className="filter-icon" />
                </div>
              </th>
              <th onClick={toggleFilter}>
                <div className="header-filter">
                  <span>PHONE NUMBER</span>
                  <img src={filterIcon} alt="filter" className="filter-icon" />
                </div>
              </th>
              <th onClick={toggleFilter}>
                <div className="header-filter">
                  <span>DATE JOINED</span>
                  <img src={filterIcon} alt="filter" className="filter-icon" />
                </div>
              </th>
              <th onClick={toggleFilter}>
                <div className="header-filter">
                  <span>STATUS</span>
                  <img src={filterIcon} alt="filter" className="filter-icon" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user: UserResponse) => (
                <tr key={user.id}>
                  <td>{user.organisation}</td>
                  <td>{user.user_name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone_number}</td>
                  <td>{formatDateTime(user.date)}</td>
                  <td>
                    <span className={getStatusClass(user.status)}>
                      {user.status}
                    </span>
                  </td>
                  <td className="menu-cell">
                    <button
                      onClick={() =>
                        setOpenMenuId(openMenuId === user.id ? null : user.id)
                      }
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
                <td colSpan={6} className="no-data">
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
