import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state ={
            error:false
        }
        
    }

    componentDidCatch(error,info){
        this.setState({error:true});
    }
    render(){
        if(this.state.error){
            return <h1>The cardlist is  down</h1>;
        }
        return this.props.children
    }
    
}

export default ErrorBoundary;