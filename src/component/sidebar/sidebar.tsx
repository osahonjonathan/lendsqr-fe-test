import { sidebarItems } from '../../data/sidebarItem';
import SidebarItem from './sidebarItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import LogOutIcon from '../../assets/sign-out.svg';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUserData } = useAppContext();

  const handleLogout = () => {
    setUserData(null);
    localStorage.clear();
    navigate('/');
  };

  const isPathActive = (currentPath: string, itemPath: string) =>
    currentPath === itemPath || currentPath.startsWith(itemPath + '/');

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <span className="close-btn" onClick={toggleSidebar}>
        ✖
      </span>
      {sidebarItems.map((section, index) =>
        'standalone' in section ? (
          <SidebarItem
            key={index}
            iconSrc={section.iconSrc}
            label={section.label}
            path={section.path}
            isActive={isPathActive(location.pathname, section.path)}
          />
        ) : (
          <div key={index} className="sidebar__group">
            <h6 className="sidebar__group-title">{section.group}</h6>
            {section.items.map((item, idx) => (
              <SidebarItem
                key={idx}
                iconSrc={item.iconSrc}
                label={item.label}
                path={item.path}
                isActive={isPathActive(location.pathname, item.path)}
              />
            ))}
          </div>
        )
      )}

      <div className="logout-icon-container" onClick={handleLogout}>
        <img src={LogOutIcon} alt="LogOut" className="logout-icon" />
        <span>LogOut</span>
      </div>
    </aside>
  );
};

export default Sidebar;
