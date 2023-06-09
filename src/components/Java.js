import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Java = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredLinks, setFilteredLinks] = useState([]);

  const navLinks = [
    { path: '/Details', label: 'Details' },
    { path: '/Morgaon', label: 'FirstAshtavinayak' },
    { path: '/SIddhivinayak', label: 'SecondAshtavinayak' },
    // Add more nav links as needed
  ];

  const handleSearchInputChange = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchInput(input);

    const filtered = navLinks.filter((link) =>
      link.label.toLowerCase().includes(input)
    );
    setFilteredLinks(filtered);
  };

  return (
    <div className="nav-links-container">
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      {filteredLinks.length > 0 && (
        <nav>
          <ul className="nav-list">
            {filteredLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link className="nav-link" to={link.path}>
                  <h4>{link.label}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Java;
