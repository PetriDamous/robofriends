import React from 'react';

const SearchBar = ({searchChange}) => {
    return(
        <div>
            <input type="text" onChange={searchChange} placeholder="robot name" />
        </div>
    );
}

export default SearchBar;