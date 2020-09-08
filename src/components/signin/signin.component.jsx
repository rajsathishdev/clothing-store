import React from 'react';

import './signin.styles.scss';

import '../form-input/form-input.component';
import FormInput from '../form-input/form-input.component';

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
            <div className="sign-in">
                <h1>I already have an account</h1>
                <h3>Sign in with your email and password</h3>
                <form onSubmit={this.handleSubmit} >
                   
                    <FormInput type="email" name="email" onChange={this.handleChange}  value={this.state.email} label='Email'/>
                    
                    <FormInput type="password" name="password" onChange={this.handleChange} value={this.state.password} label='Password'  />
                    <button type="submit" onSubmit={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        );
    }

}


export default Signin;