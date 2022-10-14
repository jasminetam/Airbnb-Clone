import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className="header" data-test="components-Header">
      {/* Left div */}
      <div className="logo">
        <Image
          src="/logo.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle div */}
      <div className="searchbar">
        <input
          type="text"
          placeholder="Start your search"
          className="searchInput"
        />
        <SearchIcon className="searchIcon" />
      </div>
      {/* Right div */}
      <div className='user'>
        <p className="userText">Become a host</p>
        <GlobeAltIcon className="headerIcon" />
        <div className='userProfile'>
          <MenuIcon className='headerIcon'/>
          <UserCircleIcon className='headerIcon' />
        </div>
      </div>
    </header>
  );
}

export default Header;
