import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[ name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h1 className='title'>I already have an account</h1>
                <span className='text'>Sign in with your email and password</span>
                <form className='form' onSubmit={this.handleSubmit} >
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
                    <div className='buttons'>
                        <CustomButton type='submit' >SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} type='button' isGoogleButton >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;