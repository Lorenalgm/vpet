import React, { useState } from 'react';
import { ImageBackground, Text } from 'react-native';
import { LoginMainContainer, LoginField, LoginSubmit } from '../components/Styled';

function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const url = 'https://images.pexels.com/photos/662417/pexels-photo-662417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    
    return (
        <ImageBackground source={{ uri: url }} style={{ width: '100%', height: '100%' }}>
            <LoginMainContainer>
                <LoginField placeholder='Email' value={ email } onChangeText={ e => setEmail(e.target.value) } />
                <LoginField placeholder='Senha' value={ password } onChangeText={ e => setPassword(e.target.value) } />
                <LoginSubmit title='Login' />
            </LoginMainContainer>
        </ImageBackground>
        );
    }
    
    export default Login;