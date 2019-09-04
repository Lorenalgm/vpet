import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text } from 'react-native';

import connectionRef from '../functions/FirebaseService';

import { LoginMainContainer, LoginField, LoginSubmit, LoginText, LoginPositionContainer } from '../components/Styled';

function Login({ navigation: { navigate } }) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    // const [ authStatus, setAuthStatus ] = useState('');
    const { auth } = connectionRef;
    
    const url = 'https://images.pexels.com/photos/2318990/pexels-photo-2318990.jpeg?cs=srgb&dl=animal-baby-dog-canine-2318990.jpg&fm=jpg';
    
    const handleSubmit = () => {
        if(email && password) auth().signInWithEmailAndPassword(email, password).then(result => {
            setEmail('');
            setPassword('');
        });
    };

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            // if(user) navigate('home');
        })
    }, []);

    return (
        <ImageBackground source={{ uri: url }} style={{ width: '100%', height: '100%' }}>
            <LoginMainContainer>
                <LoginPositionContainer>
                    <LoginField textContentType='emailAddress' placeholder='Email' value={ email } onChangeText={ text => setEmail(text) } />
                    <LoginField textContentType='password' secureTextEntry={ true } placeholder='Senha' value={ password } onChangeText={ text => setPassword(text) } />
                    <LoginText onPress={ () => navigate('passwordRecover') } >Esqueceu sua senha?</LoginText>
                    <View style={{ width: '60%', marginTop: 20 }}>
                        <LoginSubmit title='Login' onPress={ handleSubmit } />
                    </View>
                </LoginPositionContainer>
                <LoginText onPress={ () => navigate('signUp') } style={{ position: 'absolute', bottom: 10 }}>Não possui conta? Cadastre-se aqui</LoginText>
            </LoginMainContainer>
        </ImageBackground>
        );
}
    
export default Login;