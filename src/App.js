import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBar from './SearchBar';

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        const filterRobots = this.state.robots(robots =>{
            return robots.name
        })
        console.log(e.target.value);
    }

    render(){
        return(
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <CardList robots={robots} />
            </div>
            
        );

    }

}

export default App;