import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[ name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    render() {
        return (
            <div className='sign-in'>
                <h1 className='title'>I already have an account</h1>
                <p className='text'>Sign in with your email and password</p>
                <form className='form' onSubmit={this.handleSubmit} >
                    <FormInput type='email' name='email' label='Email' value={this.state.email} handleChange={this.handleChange} />
                    <FormInput type='password' name='password' label='Password' value={this.state.password} handleChange={this.handleChange} />
                    <CustomButton type='submit' > SIGN IN </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;