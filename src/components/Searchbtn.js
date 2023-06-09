import React, { useState } from 'react';


const SearchButton = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      
      {searchResults.length > 0 ? (
        <ul className="search-results">
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      ) : (
        <p className="no-results">No results found.</p>
      )}
    </div>
  );
};

export default SearchButton;
