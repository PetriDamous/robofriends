import React, { Component } from 'react';
import { robots } from '../robots';
import CardList from '../componet/CardList';
import SearchBar from '../componet/SearchBar';
import Scroll from '../componet/Scroll';

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

        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
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

}

export default App;