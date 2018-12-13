import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Scroll from './Scroll';

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (e) => { this.setState({ searchfield: e.target.value }); }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({ robots: user }));
    }    

    render(){

        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return(
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBar searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
                
            </div>
            
        );

    }

}

export default App;