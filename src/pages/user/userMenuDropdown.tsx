import { Eye, UserX, UserCheck } from 'lucide-react';
import type { UserResponse } from '../../model/user'; // adjust path

interface UserMenuDropdownProps {
  user: UserResponse;
  onViewDetails: (user: string) => void;
  onBlacklist: (userId: string) => void;
  onActivate: (userId: string) => void;
}

const UserMenuDropdown = ({
  user,
  onViewDetails,
  onBlacklist,
  onActivate,
}: UserMenuDropdownProps) => {
  return (
    <div className="menu-dropdown">
      <button className="menu-item" onClick={() => onViewDetails(user.id)}>
        <Eye size={16} />
        <span>View Details</span>
      </button>
      <button className="menu-item" onClick={() => onBlacklist(user.id)}>
        <UserX size={16} />
        <span>Blacklist User</span>
      </button>
      <button className="menu-item" onClick={() => onActivate(user.id)}>
        <UserCheck size={16} />
        <span>Activate User</span>
      </button>
    </div>
  );
};

export default UserMenuDropdown;
