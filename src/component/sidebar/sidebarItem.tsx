import { useNavigate } from 'react-router-dom';

interface SidebarItemProps {
  iconSrc: string;
  label: string;
  path: string;
  isActive: boolean;
}

const SidebarItem = ({ iconSrc, label, path, isActive }: SidebarItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`sidebar__item ${isActive ? 'active' : ''}`}
      onClick={() => navigate(path)}
    >
      <div className="card__icon">
        <img src={iconSrc} alt={label} />
      </div>
      <span className="sidebar__label">{label}</span>
    </div>
  );
};

export default SidebarItem;
