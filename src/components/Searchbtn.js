import '../css/searchbtn.css'
import React, { useState } from 'react'
import Autocomplete from 'react-autocomplete'
import { NavLink } from 'react-router-dom';
import '../css/searchbtn.css';
function Searchbtn() {

	// Defining a state named value, which we can update by calling setValue Value will store the typed value or selected suggestion by the user
	const [value, setValue] = useState('');

	return (
		<div className='search-container'>
			<div>
				
			</div>
			<div className='AutocompleteContainer'>
				<Autocomplete

					// Items is the list of suggestions displayed while the user type
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

					// To handle the case that when the user type, suggested values should be independent of upper or lower case
					shouldItemRender={(item, value
					) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}

					getItemValue={item => item.label}
                    renderItem={(item, isHighlighted) => (
						<div className={`autocomplete-item ${isHighlighted ? 'highlighted' : ''}`} key={item.label}>
						<NavLink to={item.path} className="autocomplete-link">
						  {item.label}
						</NavLink>
					  </div>
                      )}
					value={value}

					// The onChange event watches for changes in an input field
					onChange={e => setValue(e.target.value)}

					// To set the state variable to value selected from dropdown
					onSelect={(val) => setValue(val)}

					// Added style in Autocomplete component
					inputProps={{
					
						
							className: 'autocomplete-input',
							placeholder: 'Search here'
						  }}
				/>
			</div>
		</div>
	);
}

export default Searchbtn;
