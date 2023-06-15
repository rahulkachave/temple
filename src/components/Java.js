// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Autocomplete from 'react-autocomplete';



// const Java = () => {
//   const [searchInput, setSearchInput] = useState('');

//   const navLinks = [
//     { path: '/Details', label: 'Details' },
//     { path: '/Morgaon', label: 'FirstAshtavinayak' },
//     { path: '/SIddhivinayak', label: 'SecondAshtavinayak' },
//     { path: '/Java', label: 'Java' },
//     { path: '/Ganapati', label: 'GanapatiAarti' },
//     { path: '/MHTemples', label: 'Maharashtratemple' },
//     // Add more nav links as needed
//   ];

//   const handleSearchInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSelect = (value) => {
//     setSearchInput(value);
//   };

//   const filteredLinks = navLinks.filter((link) =>
//     link.label.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   return (
//     <div className="nav-links-container">
//       <div className="search-container">
//         <Autocomplete
//           value={searchInput}
//           onChange={handleSearchInputChange}
//           onSelect={handleSelect}
//           items={navLinks}
//           getItemValue={(item) => item.label}
//           shouldItemRender={(item, value) =>
//             item.label.toLowerCase().includes(value.toLowerCase())
//           }
//           renderItem={(item, isHighlighted) => (
//             <div
//               key={item.path}
//               style={{
//                 background: isHighlighted ? 'lightgray' : 'white',
//               }}
//             >
//               <Link className="nav-link" to={item.path}>
//                 <h4>{item.label}</h4>
//               </Link>
//             </div>
//           )}
//         />
//         <button className="search-button">Search</button>
//       </div>

//       {filteredLinks.length > 0 && (
//         <nav>
//           <ul className="nav-list">
//             {filteredLinks.map((link) => (
//               <li className="nav-item" key={link.path}>
//                 <Link className="nav-link" to={link.path}>
//                   <h4>{link.label}</h4>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Java;
