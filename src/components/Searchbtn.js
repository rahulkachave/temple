
// import { useState, useEffect, useRef } from "react";
// import '../css/searchbtn.css'
// const Searchbtn = ({ options = [{ path: '/Details', label: 'Details' },
// { path: '/Morgaon', label: 'FirstAshtavinayak' },
// { path: '/SIddhivinayak', label: 'SecondAshtavinayak' },] }) => {
//     const [value, setValue] = useState("");
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     const suggestions = options.filter(option =>  value && option.label.toLowerCase().includes(value.toLowerCase()))
    
//     const autocompleteRef = useRef();

//     useEffect(() => {
//         const handleClick = (event) => {
//             if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
//                 setShowSuggestions(false)
//             }
//         };
//         document.addEventListener("click", handleClick);
//         return () => {
//             document.removeEventListener("click", handleClick)
//         }
//     }, [])

//     const handleChange = event => {
//         setValue(event.target.value);
//     }

//     const handleSuggestionClick = (suggetion) => {
//         setValue(suggetion.label);
//         setShowSuggestions(false);
//     }

//     return (
//         <div className="autocomplete" ref={autocompleteRef}>
//             <input
//                 value={value}
//                 onChange={handleChange}
//                 placeholder="Search"
//                 onFocus={() => setShowSuggestions(true)}
//             />
//             {showSuggestions && (
//                 <ul className="suggestions">
//                     {suggestions.map(suggestion => (
//                         <li onClick={() => handleSuggestionClick(suggestion.label)} key={suggestion}>
//                             {suggestion.label}
//                         </li>
//                     ))}
//                 </ul>
//             )}

//         </div>
//     )
// };


// export default Searchbtn
import React, { useState } from 'react'
import Autocomplete from 'react-autocomplete'
import { NavLink } from 'react-router-dom';
import '../css/searchbtn.css';
function Searchbtn() {

	// Defining a state named value, which
	// we can update by calling setValue
	// Value will store the typed value or
	// selected suggestion by the user
	const [value, setValue] = useState('');

	return (
		<div className='searchbtn-container'>
			<div>
				
			</div>
			<div>
				<Autocomplete

					// Items is the list of suggestions
					// displayed while the user type
					items={[
						{path: '/Ganapati', label: 'Ganapatiaarati' },
                        { path: '/Morgaon', label: 'FirstAshtavinayak' },
                   { path: '/SIddhivinayak', label: 'SecondAshtavinayak' },
						{ label: 'C' },
						{ label: 'Python' },
						{ label: 'JavaScript' },
						{ label: 'Julia' },
						{ label: 'Java' },
						{ label: 'Objective C' },
						{ label: 'C#' },
						{ label: 'Dart' },
						{ label: 'Perl' }
					]}

					// To handle the case that when
					// the user type, suggested
					// values should be independent
					// of upper or lower case
					shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
					getItemValue={item => item.label}
                    renderItem={(item, isHighlighted) => (
                        <div style={{ background: isHighlighted ? '#bcf5bc' : 'white' }} key={item.label}>
                          <NavLink to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {item.label}
                          </NavLink>
                        </div>
                      )}
					value={value}

					// The onChange event watches for
					// changes in an input field
					onChange={e => setValue(e.target.value)}

					// To set the state variable to value
					// selected from dropdown
					onSelect={(val) => setValue(val)}

					// Added style in Autocomplete component
					inputProps={{
						className: 'autocomplete-container',
						placeholder: 'Search language'
					}}
				/>
			</div>
		</div>
	);
}

export default Searchbtn;
