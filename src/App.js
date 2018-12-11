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

    onSearchChange = (e) => { this.setState({ searchfield: e.target.value }); }

    render(){

        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return(
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <CardList robots={filterRobots} />
            </div>
            
        );

    }

}

export default App;