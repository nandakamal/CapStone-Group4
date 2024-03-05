import React, { useState } from 'react';
import VenueList from './components/VenueList';
import PackageList from './components/PackageList';
import UserList from './components/UserList';

function App() {
  const [activeTab, setActiveTab] = useState('venue');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <header className='text-center p-5  '>
        <h1>Admin panel</h1>
      </header>
      <ul className="nav nav-tabs mt-3">
        <li className="nav-item col">
          <button
            className={`nav-link w-100 ${activeTab === 'venue' ? 'active' : ''}`}
            onClick={() => handleTabChange('venue')}
          >
            Venues
          </button>
        </li>
        <li className="nav-item col">
          <button
            className={`nav-link w-100 ${activeTab === 'package' ? 'active' : ''}`}
            onClick={() => handleTabChange('package')}
          >
            Packages
          </button>
        </li>
        <li className="nav-item col">
          <button
            className={`nav-link w-100 ${activeTab === 'User' ? 'active' : ''}`}
            onClick={() => handleTabChange('user')}
          >
            Users
          </button>
        </li>
        <li className="nav-item col">
          <button
            className={`nav-link w-100 ${activeTab === 'Bookings' ? 'active' : ''}`}
            onClick={() => handleTabChange('bookings')}
          >
            bookings
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'venue' ? 'active' : ''}`}>
          <VenueList />
        </div>
        <div className={`tab-pane ${activeTab === 'package' ? 'active' : ''}`}>
          <PackageList />
        </div>
        <div className={`tab-pane ${activeTab === 'user' ? 'active' : ''}`}>
          <UserList />
        </div>
        <div className={`tab-pane ${activeTab === 'booking' ? 'active' : ''}`}>
          <p>Bookings</p>
        </div>
      </div>
    </div>
  );
}

export default App;
