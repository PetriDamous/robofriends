import React from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBar from './SearchBar';

const App = () => {
    return(
        <div className="tc">
            <h1>Robofriends</h1>
            <SearchBar />
            <CardList robots={robots} />
        </div>
        
    );
}

export default App;