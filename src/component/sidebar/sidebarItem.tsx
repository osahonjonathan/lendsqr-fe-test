import { useNavigate } from 'react-router-dom';

interface SidebarItemProps {
  iconSrc: string;
  label: string;
  path: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem = ({
  iconSrc,
  label,
  path,
  isActive,
  onClick,
}: SidebarItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    if (onClick) onClick();
  };

  return (
    <div
      className={`sidebar__item ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <div className="card__icon">
        <img src={iconSrc} alt={label} />
      </div>
      <span className="sidebar__label">{label}</span>
    </div>
  );
};

export default SidebarItem;
