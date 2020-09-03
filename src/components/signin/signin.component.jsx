import React from 'react';

import './signin.styles.scss';

class Signin extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: '', password: ''});
        console.log(this.state);
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        
        this.setState({[name]: value});

    }

    render() {
        return (
            <div className="signin">
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={this.handleChange}  value={this.state.email} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}   />
                    <button type="submit" onSubmit={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        );
    }

}


export default Signin;