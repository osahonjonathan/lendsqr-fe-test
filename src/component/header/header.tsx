import { type ChangeEvent, type FormEvent } from 'react';
import { useAppContext } from '../../context/appContext';
import lendsqrLogo from '../../assets/lendSqrLogo.svg';
import notificationIcon from '../../assets/notification.svg';
import avaterIcon from '../../assets/avatar.svg';
import searchIcon from '../../assets/search.svg';
import { ChevronDown } from 'lucide-react';



type HeaderProps = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { userData, setSearchQuery, searchTerm, setSearchTerm } =
    useAppContext();
 

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchTerm.trim());
  };

  return (
    <header className="app-header">
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>
      <img src={lendsqrLogo} alt="Lendsqr Logo" className="logo" />

      <form
        className="app-header__search-container"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          placeholder="Search for anything"
          className="app-header__search-input"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="app-header__search-button">
          <img src={searchIcon} alt="Search" className="search-icon" />
        </button>
      </form>

      <div className="app-header__nav-items">
        <a href="#" className="app-header__nav-link">
          Docs
        </a>{' '}
        <div className="app-header__notification-icon">
          <img
            src={notificationIcon}
            alt="Search"
            className="notification-icon"
          />
        </div>
        <div className="app-header__profile">
          <img src={avaterIcon} alt="user" className="app-header__avatar" />
          <span className="app-header__username">
            {userData?.name || 'Guest'}
          </span>
          <ChevronDown size={16} className="app-header__dropdown-arrow" />
        </div>
      </div>
    </header>
  );
};

export default Header;
