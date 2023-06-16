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
					{path: '/Ganapati', label: 'Ganapati aarati' },
                 { path: '/Morgaon', label: 'First Ashtavinayak' },
                   { path: '/Details', label: 'Aarati sangrah' },
				   { path: '/SIddhivinayak', label: 'Second Ashtavinayak' },
				   { path: '/PaliTemple', label: 'Pali Temple' },
				   { path: '/Mahad', label: 'Mahad' },
				   { path: '/Ozar', label: 'Ozar' },
				   { path: '/Ranjangaon', label: 'Ranjangaon' },
				   { path: '/Lenyadri', label: 'Lenyadri' },
				   { path: '/Theur', label: 'Theur' },
				   { path: '/Ashtavinayak', label: 'Ashtavinayak' },
						
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
