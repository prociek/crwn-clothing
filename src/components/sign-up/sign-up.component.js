import React from 'react';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('password don\'t match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, {displayName});

            this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''        
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className='sign-up'>
                <h1 className='title'>I do not have a account</h1>
                <span className='text'>Sign up with your email and password</span>
                <form className='form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text' 
                        name='displayName' 
                        label='Display Name' 
                        value={this.state.displayName} 
                        handleChange={this.handleChange} 
                        required />
                    <FormInput 
                        type='email' 
                        name='email' 
                        label='Email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required />
                    <FormInput 
                        type='password' 
                        name='password' 
                        label='Password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required />
                    <FormInput 
                        type='password' 
                        name='confirmPassword' 
                        label='Confirm Password' 
                        value={this.state.confirmPassword} 
                        handleChange={this.handleChange} 
                        required />
                    <CustomButton>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;