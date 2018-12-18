import React, { Component } from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super();
        this.state = {
            ifError: false
        }
    }
    
    componentDidCatch(error, info){
        this.setState({ ifError: true });
    }
    
    
    render(){
        if(this.state.ifError){
            return <h1>Oppppsss this isn't good.</h1>
        }
        console.log(this.state.ifError);
        return this.props.children
    }
}

export default ErrorBoundry; 